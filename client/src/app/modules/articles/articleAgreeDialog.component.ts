import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../shared/services/dataService';
import { LoadingSpinnerService } from '../../shared/services/loadingSpinnerService';
import { AuthService } from '../../shared/services/authService'
import { Restangular } from 'ngx-restangular';
import * as _ from 'lodash'

@Component({
  selector: 'articleAgreeDialog',
  templateUrl: './articleAgreeDialog.component.html',
  styleUrls: ['./articleAgreeDialog.component.css'],
  providers: [AuthService]
})
export class ArticleAgreeDialog {

  public title : any;
  public node: any;

  opinion: any = '';

  constructor(@Inject(MD_DIALOG_DATA) data: any,
              public dialogRef: MdDialogRef<ArticleAgreeDialog>,
              private restangular: Restangular,
              private loadingSpinnerService: LoadingSpinnerService,
              private authService: AuthService) {
    this.dialogRef.updateSize('300', '300');
    this.node = data.node;
  }

  ngOnInit() {

    if (this.node.nodeData.g == 'g5') { // g5:comment
      this.title = 'Comment';
    } else {
      this.title = this.node.group.name;
    }

    if(_.includes(this.node.votes.agrees, AuthService.getCurrentUser()._id)) {
      this.opinion = 'agree'
    } else if(_.includes(this.node.votes.disagrees, AuthService.getCurrentUser()._id)) {
      this.opinion = 'disagree'
    } else {
      this.opinion = 'none'
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  toggle(handler, $event) {
    if(handler == 'agree') {
      if($event.checked) this.opinion = 'agree';
      else this.opinion = 'none';
    }
    else if(handler == 'disagree') {
      if($event.checked) this.opinion = 'disagree';
      else this.opinion = 'none';
    }

    console.log(this.opinion)
    this.vote(this.opinion);
  }

  vote(vote:string) {
    this.loadingSpinnerService.show();
    this.restangular.one('article', this.node.nodeData.article_id)
                    .one(this.node.nodeData.g == 'g5' ? 'comment' : 'group', this.node._id)
                    .one('user', AuthService.getCurrentUser()._id)
                    .customPOST({}, 'vote/' + vote).subscribe(votes => {
        this.loadingSpinnerService.hide();
        // if(vote == 'agree') this.node.votes.agrees ++;
        // else if(vote == 'disagree') this.node.votes.disagrees ++;
        this.node.votes = votes
      }, () => {
        this.loadingSpinnerService.hide();
      });
  }
}
