import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { MdSnackBar, MdDialog } from '@angular/material';
import { Restangular } from 'ngx-restangular';
import { DataService } from '../../shared/services/dataService';
import { ArticleService } from '../../shared/services/articleService';
import { D3Service } from '../../shared/services/D3Service';
import { SharedService } from '../../shared/services/shared.service'
import { LoadingSpinnerService } from '../../shared/services/loadingSpinnerService';
import { AuthService } from '../../shared/services/authService'
import * as d3 from "d3/index";
import * as _ from "lodash";
import * as moment from 'moment';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [AuthService]
})
export class LandingComponent {

  title = 'Landing Page';

  private d3Service: D3Service = null;

  private data;
  private nodes;

  showSocialMenu: boolean = false;

  svgSize: any = {
    width:0,
    height: 0
  };

  query: any = {
    currentView: 'DEFAULT',
    article: null,
    user: null,
    location: null,
    group: null,
    // filter
    search: '',
    views: '',
    periodStart: null,
    periodEnd: null,
    g11: null,
    g12: null,
    g13: null,
    stateView: false,
    bookmarkedBy: null,
    bookmarks: false
  };

  popStateSubscription: any;

  currentUser: any;

  pageId = 'PAGE_LANDING'



  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private restangular: Restangular,
              private dialog: MdDialog,
              private location: Location,
              private loadingSpinnerService: LoadingSpinnerService,
              private _sharedService: SharedService,
              private mdSnackBar: MdSnackBar,
              private authService: AuthService) {
    this.d3Service = new D3Service();
    this._sharedService.action$.subscribe(
      data => {
        if(data['action'] == 'userposts')
          this.showUserPosts(data['data'])
        else if(data['action'] == 'bookmarks')
          this.showBookmarks();
      });

    this.currentUser = authService.getCurrentUser();
    this.query.bookmarkedBy = (this.currentUser != null) ? this.currentUser._id : null
  }

  ngOnInit() {
    this.d3Service.init('#svg');

    this.resizeWindow();

    this.d3Service.on('click', this.nodeClick, this);

    this.d3Service.on('dblclick', this.nodeDblClick, this);

    this.d3Service.on('agreedisagree', this.showAgreeDialog, this);

    this.d3Service.on('drilldown', this.switchFocusView, this);

    this.d3Service.on('bookmark_post', this.bookmarkPost, this);

    this.d3Service.on('open_article_source', this.openArticleSource, this);

    this.d3Service.on('copy_article_link', this.copyArticleLink, this);

    this.d3Service.on('copy_article_id', this.copyArticleId, this);

    this.d3Service.on('share_post', this.sharePost, this);

    this.d3Service.on('report_post', this.reportPost, this);

    this.d3Service.on('article_navigate', this.onArticleNavigate, this);

    this.popStateSubscription = this.location.subscribe( (event) => {
      this.onPageBack();
    });

    this.init();
  }

  ngOnDestroy() {
    this.popStateSubscription.unsubscribe();
  }

  init() {
    this.loadParamsFromUrl();
    this.start();
  }

  resetFilters() {
    this.query = {
      currentView: 'DEFAULT',
      article: null,
      user: null,
      location: null,
      group: null,
      // filter
      search: '',
      views: '',
      periodStart: null,
      periodEnd: null,
      g11: null,
      g12: null,
      g13: null,
      stateView: false
    };
  }

  loadParamsFromUrl() {
    let queryParams = Object.assign({}, this.activatedRouter.snapshot.queryParams);
    for(let q in this.query) {
      if(queryParams[q])
        this.query[q] = queryParams[q];
    }
  }

  setParamsToUrl() {
    let queryParams = Object.assign({}, this.activatedRouter.snapshot.queryParams);
    for(let q in this.query) {
      if(this.query[q] && this.query[q] != '') queryParams[q] = this.query[q]; else delete queryParams[q];
    }

    this.router.navigate(['.'], { queryParams: queryParams });
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
    this.svgSize.height = height - 100;

    this.d3Service.resize(this.svgSize);
  }

  onFilterChanged(filter) {
    _.each(filter, (v, k) => this.query[k] = v);

    this.query['article'] = null;

    this.setParamsToUrl();

    this.start();
  }

  getQuery() {
    let params = JSON.parse(JSON.stringify(this.query));
    return _.pickBy(params, (q) => q && q != '');
  }

  draw(articles) {
    this.data = articles;

    this.nodes = ArticleService.initNodes(articles, this.query['currentView'], this.query['stateView'], this.query);

    this.d3Service.start(this.nodes, this.getArticleIndex(this.query.article));
  }
  getArticleIndex(slug) {
    for(var i = 0; i < this.data.length; i++) {
      if(this.data[i].slug == slug) return i;
    }
    return 0;
  }
  start(refreshData: boolean = true) {
    if(refreshData) {
      this.loadingSpinnerService.show();
      let apiArticles = this.restangular.all('article');
      apiArticles.customGET('search', this.getQuery()).subscribe(result => {
        this.draw(result);
        this.loadingSpinnerService.hide();
        if(result.length == 0) {
          this.mdSnackBar.open('Search/Filter did not find matching Articles.', 'Showing all Articles', { duration: 10000 })
            .onAction().subscribe(() => {
              this.query.g11 = [];
              this.query.g12 = [];
              this.query.g13 = [];
              this.query.periodStart = null;
              this.query.periodEnd = null;
              this.query.search = '';
              this.setParamsToUrl();
              this.start();
            });
        }
      }, () => {
        this.loadingSpinnerService.hide();
      });
    }
    else {
      this.draw(this.data);
    }
  }

  showArticle(article) {
    this.router.navigate(['/article', article.slug]);
  }

  toggleOffAll() {
    this.showSocialMenu = false;
  }

  onArticleNavigate(articleIndex) {
    this.query.article = this.data[articleIndex].slug;

    this.setParamsToUrl();
  }

  nodeClick(node, elType) {
    if (node.nodeData.g == 'g0' && elType == 'editLinksArticle') {
      ArticleService.popupArticleForm(this.dialog, node, result => {
        if (result) this.start();
      });
    }
    if (node.nodeData.g == 'g0' && (elType == 'tspansArticleTitle1') || (elType == 'tspansArticleTitle2')) {
      this.showArticle(node);
    }
    else {
      this.showAgreeDialog(node);
    }
  }

  nodeDblClick(node, elType) {
    this.switchFocusView(node, elType);
  }

  showAgreeDialog(node) {
      ArticleService.popupAgreeDialog(node, this.dialog, result => {
    });
  }

  switchFocusView(node, elType) {
    let nodeType = node.nodeData.type;

    if(nodeType == 'comment' || nodeType == 'article') return;

    this.query['currentView'] = 'FOCUS';

    this.query['user'] = null;
    this.query['location'] = null;
    this.query['group'] = null;
    this.query['article'] = null;

    switch(true) {
      case nodeType == 'user': this.query['user'] = node._id; break;
      case nodeType == 'location': this.query['location'] = node._id; break;
      case nodeType == 'group': this.query['group'] = node.group._id; break;
    }

    this.setParamsToUrl();

    this.start();
  }

  onPageBack() {
    if(this.query['currentView'] == 'DEFAULT') {
      this.location.back();
    }
    else {
      this.query['currentView'] = 'DEFAULT';

      this.query['user'] = null;
      this.query['location'] = null;
      this.query['group'] = null;
      this.query['article'] = null;

      this.setParamsToUrl();

      this.start();
    }
  }

  addArticle() {
    ArticleService.popupArticleForm(this.dialog, null, result => {
      if (result.action === 'login') {
        this._sharedService.emitAction({ action: 'login', data: null });
      } else {
        this.query.currentView = 'DEFAULT';
        this.query.article = result.slug;
        this.query.user = null;
        this.query.location = null;
        this.query.group = null;
        this.query.search = '';
        this.query.views = '';
        this.query.periodStart = null;
        this.query.periodEnd = null;
        this.query.g11 = null;
        this.query.g12 = null;
        this.query.g13 = null;
        this.setParamsToUrl();
        this.start();
      }
    });
  }

  toggleSocial() {
    this.showSocialMenu = !this.showSocialMenu;
  }

  bookmarkPost(node) {
    if (this.currentUser != null) {
      this.loadingSpinnerService.show();
      this.restangular.one('user', this.currentUser._id).customPOST(null, 'bookmark/' + node._id.toString()).subscribe(res => {
        this.loadingSpinnerService.hide();
        this.start()
      }, () => {
        this.loadingSpinnerService.hide();
      });
    } else {
      this.mdSnackBar.open('Please log in', null, { duration: 6000 })
    }

  }

  openArticleSource(node) {
    ArticleService.openArticleSource(node);
  }

  copyArticleLink(node) {
    ArticleService.copyArticleLink(node, this.mdSnackBar);
  }

  copyArticleId(node) {
    ArticleService.copyArticleId(node, this.mdSnackBar);
  }

  sharePost(node) {

  }

  reportPost(node) {

  }

  showUserPosts(userId) {
    this.resetFilters()
    this.query['user'] = userId
    this.setParamsToUrl();
  }

  showBookmarks() {
    this.resetFilters()
    this.query['bookmarks'] = true
    this.setParamsToUrl();
  }
}
