import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Location } from '@angular/common'
import { MdSnackBar, MdDialog } from '@angular/material';
import { Restangular } from 'ngx-restangular';
import { D3Service } from '../../shared/services/D3Service';
import { DataService } from '../../shared/services/dataService';
import { ArticleService } from '../../shared/services/articleService';
import { LoadingSpinnerService } from '../../shared/services/loadingSpinnerService';
import { AuthService } from '../../shared/services/authService'

@Component({
  selector: 'article-view-detail',
  templateUrl: './articleView.component.html',
  styleUrls: ['./articleView.component.css'],
  providers: [AuthService]
})
export class ArticleViewComponent {

  nodes: any = [];

  d3Service: D3Service;

  article: any = null;

  articleSlug: any = '';

  svgSize: any = { width: 0, height: 0};

  query: any = {
    search: '',
    views: '',
    periodStart: null,
    periodEnd: null,
    g11: null,
    g12: null,
    g13: null,
    stateView: false
  };

  currentUser: any;

  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private restangular: Restangular,
              private dialog: MdDialog,
              private location: Location,
              private loadingSpinnerService: LoadingSpinnerService,
              private mdSnackBar: MdSnackBar,
              private authService: AuthService) {
    this.d3Service = new D3Service();
    this.currentUser = AuthService.getCurrentUser();
  }

  ngOnInit() {
    this.d3Service.init('#svgArticleView', false, {width: 0, height: 0});

    this.d3Service.on('click', this.nodeClick, this);

    this.d3Service.on('dblclick', this.nodeDblClick, this);

    this.d3Service.on('agreedisagree', this.showAgreeDialog, this);

    this.d3Service.on('drilldown', this.switchFocusView, this);

    this.resizeWindow();

    this.loadParamsFromUrl();

    this.start();
  }

  loadParamsFromUrl() {
    if(this.activatedRouter.snapshot.paramMap.has('slug')) {
      this.articleSlug = this.activatedRouter.snapshot.paramMap.get('slug');
    }
    else {
      this.closeArticleView();
    }
  }

  onFilterChanged() {
    this.router.navigate(['/'], { queryParams: _.pickBy(this.query, (q) => q && q != '') });
  }

  closeArticleView() {
    this.location.back();
  }

  start() {
    this.loadingSpinnerService.show();
    let userId = this.currentUser != null ? this.currentUser._id : 'none'
    this.restangular.one('article', this.articleSlug).customGET('user/' + userId).subscribe(res => {
      this.loadingSpinnerService.hide();
      this.article = res;
      this.article.time = moment(this.article.createdAt).fromNow();
      this.nodes = ArticleService.initNodes([this.article], 'ARTICLE', false, null);
      this.d3Service.start(this.nodes, 0);
    }, err => {
      this.loadingSpinnerService.hide();
    });
  }


  onResize($event) {
    this.resizeWindow();
  }

  resizeWindow(width = 0, height = 0) {
    if(width == 0) {
      width = window.innerWidth;
      height = window.innerHeight;
    }
    this.svgSize.width = width;
    this.svgSize.height = height + 100;

    this.d3Service.resize(this.svgSize);
  }

  openArticleSource() {
    ArticleService.openArticleSource(this.article);
  }

  copyArticleLink() {
    ArticleService.copyArticleLink(this.article, this.mdSnackBar);
  }

  copyArticleId() {
    ArticleService.copyArticleId(this.article, this.mdSnackBar);
  }

  editArticle() {
    ArticleService.popupArticleForm(this.dialog, this.article, result => {
      if (result) this.start();
    });
  }


  nodeClick(node, elType) {
    this.showAgreeDialog(node);
  }

  nodeDblClick(node, elType) {
    this.switchFocusView(node, elType);
  }

  showAgreeDialog(node) {
    ArticleService.popupAgreeDialog(node, this.dialog, result => { });
  }

  bookmarkPost() {
    if (AuthService.getCurrentUser() != null) {
      this.loadingSpinnerService.show();
      this.restangular.one('user', AuthService.getCurrentUser()._id).customPOST(null, 'bookmark/' + this.article._id.toString()).subscribe(res => {
        this.loadingSpinnerService.hide();
        this.start()
      }, () => {
        this.loadingSpinnerService.hide();
      });
    } else {
      this.mdSnackBar.open('Please log in', null, { duration: 6000 })
    }
  }

  switchFocusView(node, elType) {
    let nodeType = node.nodeData.type;

    if(nodeType == 'comment' || nodeType == 'article') return;

    let params = { currentView: 'FOCUS' };

    switch(true) {
      case nodeType == 'user': params['user'] = node._id; break;
      case nodeType == 'location': params['location'] = node._id; break;
      case nodeType == 'group': params['group'] = node.group._id; break;
    }

    this.router.navigate(['/'], { queryParams: params });
  }
}
