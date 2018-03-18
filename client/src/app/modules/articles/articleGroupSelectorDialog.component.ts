import { Component, Inject } from '@angular/core';
import { MdSnackBar, MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Restangular } from 'ngx-restangular';
import * as _ from 'lodash';
import * as moment from 'moment';
import { LoadingSpinnerService } from '../../shared/services/loadingSpinnerService';
import { DataService } from '../../shared/services/dataService';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'article-group-selector-dialog',
  styleUrls: ['./articleGroupSelectorDialog.component.css'],
  templateUrl: './articleGroupSelectorDialog.component.html',
})
export class ArticleGroupSelectorDialog {

  value: any = [];
  limit: any = 1;
  group: any = [];
  groups: any = [];
  data: any = [];
  userId: string = ''

  constructor(@Inject(MD_DIALOG_DATA) data: any,
              public dialogRef: MdDialogRef<ArticleGroupSelectorDialog>,
              private restangular: Restangular,
              private loadingSpinnerService: LoadingSpinnerService,
              private mdSnackBar: MdSnackBar) {
    //this.value = data.value ? data.value : [];
    this.data = data.value;
    this.limit = data.limit;
    this.group = data.group;
    this.userId = data.user;

    let groupValue = []
    this.importValues()
  }

  ngOnInit() {
    this.groups = (typeof DataService.groupDataSet[this.group]) == 'undefined' ? [] : _.map(DataService.groupDataSet[this.group], (g:any) => g.name);
  }

  closeDialog(result) {
    result = _.map(result, (g:any) => g.value ? g.value : g);
    this.dialogRef.close(this.data);
  }

  onItemRemoved(item) {
    let index = this.data.findIndex(group => group.name == item)

    if(this.canRemove(item)) {
      this.data.splice(index, 1)
    } else {
      this.mdSnackBar.open('You can only change the values that others have not opined (Agreed/Disagreed) on', null, { duration: 2000 });
    }
    this.importValues()
  }

  onItemAdded(item) {
    this.data.push({name: item.value, votes: {agrees:[], disagrees: []}})
    this.importValues()
  }

  importValues() {
    if (this.data.length > 0) {
      this.value = this.data.reduce((acc, item) => {
       acc.push(item['name'])
       return acc
     }, [])
   } else {
     this.value = []
   }
  }

  canRemove(item) {
    let index = this.data.findIndex(group => group.name == item)
    if (index < 0) return true;
    let canRemove = false
    if ((this.data[index]['votes']['agrees'].length == 0 ||
        (this.data[index]['votes']['agrees'].findIndex(user => user.toString() == this.userId) >= 0 && this.data[index]['votes']['agrees'].length == 1))
       &&
       (this.data[index]['votes']['disagrees'].length == 0 ||
           (this.data[index]['votes']['disagrees'].findIndex(user => user.toString() == this.userId) >= 0 && this.data[index]['votes']['disagrees'].length == 1))
      ) {
        canRemove = true
      }
    return canRemove;
  }

  onRemoving(tag): Observable<any> {
    return Observable.create(observer => {
      let canRemove = false
      if (canRemove) {
        observer.next(tag);
      } else {
        observer.complete();
      }
    });
  }
}
