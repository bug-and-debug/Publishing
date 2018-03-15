import { Component, ChangeDetectorRef, ViewChild, ElementRef, Inject } from '@angular/core';
import { MdSnackBar, MdDialog, MdDialogRef, MD_DIALOG_DATA, MdChipInputEvent, ENTER } from '@angular/material';
import { Restangular } from 'ngx-restangular';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import * as _ from 'lodash';
import * as moment from 'moment';
import { LoadingSpinnerService } from '../../shared/services/loadingSpinnerService';
import { DataService } from '../../shared/services/dataService';
import { ArticleGroupSelectorDialog } from "./articleGroupSelectorDialog.component";
import { ConfirmDialog } from "../../shared/components/confirmDialog/confirmDialog.component"
import { AuthService } from '../../shared/services/authService';

const COMMA = 188;


@Component({
  selector: 'article-dialog',
  styleUrls: ['./articleFormDialog.component.css'],
  templateUrl: './articleFormDialog.component.html',
  providers: [AuthService]
})
export class ArticleFormDialog {

  me: any;
  node: any;
  groups: any;
  comment: string = "";
  url: any = "";

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  isArticleOwner: boolean = false;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  articleInfo: any = { valid: false };

  articleLinkChanged: Subject<string> = new Subject<string>();


  constructor(@Inject(MD_DIALOG_DATA) data: any,
              public dialogRef: MdDialogRef<ArticleFormDialog>,
              private restangular: Restangular,
              private loadingSpinnerService: LoadingSpinnerService,
              private dialog: MdDialog,
              private mdSnackBar: MdSnackBar,
              private authService: AuthService) {
    this.dialogRef.updateSize('300', '300');
    this.dialogRef.updatePosition({ top: '50px', right: '100px' });
    this.node = data.node;
    this.me = this.authService.getCurrentUser()
    if(this.node && this.me) {
      if(_.findIndex(this.node.users, user => user['_id'].toString() === this.me._id) >= 0) this.isArticleOwner = true;
    }

    console.log(this.isArticleOwner)

  }



  ngOnInit() {
    if(this.node) {
      this.groups = { g1: [], g2: [], g3: [], g4: [], g11: []};
      this.node.groups.forEach((group) => {
        if (!this.groups[group.group.groupType]) {
          this.groups[group.group.groupType] = [];
        }

        if(_.findIndex(group.user, u => u.toString() === this.me._id) >= 0)
          this.groups[group.group.groupType].push({name: group.group.name, votes: group.votes});
      })
      // if(this.groups.g2.length == 0) this.groups.g2.push('');
      // if(this.groups.g4.length == 0) this.groups.g4.push('');
    }
    else {
      this.groups = { g1: [], g2: [], g3: [], g4: [], g11: [] }
    }
  }

  closeDialog(success: boolean = false) {
    this.dialogRef.close(success);
  }

  onArticleLinkChanged($event:any) {
    // this.articleLinkChanged.next(text);
    this.url = this.url.trim();
    this.onLoadArticleInfo();
  }

  onArticleLinkKeydown($event:any) {
    if($event.keyCode == 13) {
      this.onArticleLinkKeydown($event);
    }
  }

  onLoadArticleInfo() {
    if(this.url == "") return;
    this.loadingSpinnerService.show();
    this.restangular.all('article').customPOST({url: this.url}, 'analyze').subscribe(res => {
      this.loadingSpinnerService.hide();

      this.articleInfo['valid'] = res.type == 'article';

      if(res.errorCode) {
        this.mdSnackBar.open(res.error, null, { duration: 1500 });
      }
      else if(!this.articleInfo['valid']) {
        this.mdSnackBar.open('Please add an Article', null, { duration: 2000 });
      }
      else {
        this.articleInfo['title'] = res.objects[0].title;
        this.articleInfo['articleDate'] = (typeof res.objects[0].estimatedDate) != 'undefined' ? res.objects[0].estimatedDate : moment().format(DataService.formats.backend.datetime);
        this.articleInfo['imageLink'] = res.objects[0].images.length > 0 ? res.objects[0].images[0].url : '';
        this.articleInfo['pictureLink'] = this.articleInfo['imageLink'];
        this.articleInfo['body'] = (typeof res.objects[0].text) != 'undefined' ? res.objects[0].text : '';
        this.articleInfo['bodyHtml'] = (typeof res.objects[0].html) != 'undefined' ? res.objects[0].html : '';
        this.articleInfo['articleLink'] = res.request.pageUrl;
        this.articleInfo['articleSource'] = (typeof res.objects[0].siteName) != 'undefined' ? res.objects[0].siteName : 'Unknown';
        this.articleInfo['articleSourceIcon'] = (typeof res.objects[0].icon) != 'undefined' ? res.objects[0].icon : 'favicon.ico';
        this.articleInfo['sourceTrusted'] = true;

        /*
        this.groups["g12"] = [];
        _.each(res.objects[0].tags, (tag:any) => {
          this.groups["g12"].push(tag.label);
        });
        */
      }
    }, () => {
      this.mdSnackBar.open('Please add an Article', null, { duration: 2000 });
      this.loadingSpinnerService.hide();
    });
  }

  publish() {
    if(!AuthService.isUserLoggedIn()) {
      let dialogRef = this.dialog.open(ConfirmDialog, {
        width: '400px',
        height: '200px',
        data: { title: 'Warning',
                okButton: 'Login',
                subject: 'You did not login yet. Please login first',
                cancelButton: 'Cancel'
              }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result != undefined) {
          switch (result.action) {
            case 'login':
              this.dialogRef.close({action: 'login'});
              break
            default:
              break
          }
        }
      });

      return
    }

    if(this.node == null || this.isArticleOwner) {
      if(this.node == null && !this.articleInfo.valid) return;
      if((this.groups.g11.length == 0 || this.groups.g11[0].name.trim().length == 0) ||
          (this.groups.g1.length == 0 && this.groups.g2.length == 0 && this.groups.g3.length == 0 && this.groups.g4.length == 0 && this.comment.length == 0)) {
            console.log('something wrong')
            this.mdSnackBar.open('Please select a g11 and add an Opinion', null, { duration: 2000 });
            return
          }
    }

    let states = ["S1", "S2", "S3"];
    let groupsData = _.chain(this.groups).mapValues((gs: any, gt) => { return _.map(gs, (g, index) => { return { groupType: gt, name: g['name'], state: states[index % 3]}; }); }).values().flatten().filter((d:any) => d.name != '').value();
    var postData = {"comment" : this.comment, "groups": groupsData, "user": this.authService.getCurrentUser()};

    if(this.node) {
      this.loadingSpinnerService.show();
      this.restangular.one('article', this.node._id).customPUT(postData, 'edit').subscribe(res => {
        this.loadingSpinnerService.hide();
        this.closeDialog(res);
      }, () => {
        this.loadingSpinnerService.hide();
      });
    } else {
      this.loadingSpinnerService.show();
      postData["article"] = this.articleInfo;
      this.restangular.all('article').post(postData).subscribe(res => {
        this.loadingSpinnerService.hide();
        this.closeDialog(res);
      }, () => {
        this.loadingSpinnerService.hide();
      });
    }
  }

  share(platform: String) {
    switch(platform) {
      case 'TWITTER':
        console.log('platform is twitter')
        //let shareLink = 'https://twitter.com/home?status=http://beta.channelmum.com/chat/';
        let shareLink = 'https://twitter.com/home?status=' + this.url;
        console.log(shareLink)

        window.open(shareLink, '_blank', "width=500,height=500, top=250, left=400").focus();
        break
      default:
        break
    }
  }

  resetLink() {
    this.articleInfo = { valid: false };
    this.url = "";
  }

  onAddChipToGroup($event, group, limit) {
    if($event.target.tagName.toLowerCase() == 'md-icon') return;//  || (this.node == null && !this.articleInfo.valid) || (limit > 1 && this.groups[group].length >= limit)) return;

    let groupValue = []
    if (this.groups[group].length > 0) {
      groupValue = this.groups[group].reduce((acc, item) => {
       acc.push(item['name'])
       return acc
     }, [])
    }

    let dialogRef = this.dialog.open(ArticleGroupSelectorDialog, {
      width: '400px',
      height: '250px',
      data: { group: group, value: this.groups[group], limit: limit, user: this.me._id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.groups[group] = result;
        // this.groups[group] = result.reduce((acc, item) => {
        //   acc.push({name: item, votes: {agree:[], disagree: []}})
        //   return acc
        // }, [])
      }
    });
  }

  remove(groupName: any, groupType: any): void {
    let index = this.groups[groupType].findIndex(group => group.name == groupName)
    if (!this.me) {
      this.mdSnackBar.open('Please log in', null, { duration: 2000 });
      this.dialogRef.close(false)
      return
    }

    let canRemove = false
    if ((this.groups[groupType][index]['votes']['agrees'].length == 0 ||
        (this.groups[groupType][index]['votes']['agrees'].findIndex(user => user.toString() == this.me._id) >= 0 && this.groups[groupType][index]['votes']['agrees'].length == 1))
       &&
       (this.groups[groupType][index]['votes']['disagrees'].length == 0 ||
           (this.groups[groupType][index]['votes']['disagrees'].findIndex(user => user.toString() == this.me._id) >= 0 && this.groups[groupType][index]['votes']['disagrees'].length == 1))
      ) {
        canRemove = true
      }

    if(!canRemove) {
      this.mdSnackBar.open('You can only change the values that others have not opined (Agreed/Disagreed) on', null, { duration: 2000 });
      return
    }

    if (index >= 0) {
      this.groups[groupType].splice(index, 1);
    }
  }
}
