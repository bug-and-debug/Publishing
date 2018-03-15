import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Location } from '@angular/common'
import { MdSnackBar, MdDialog } from '@angular/material';
import { DataService } from '../../shared/services/dataService';
import { SharedService } from '../../shared/services/shared.service'

@Component({
  selector: 'layout-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {

  @Input() pageId;
  @Input() filter;

  @Output() onFilterChanged = new EventEmitter<any>();
  @Output() onShowBookmarks = new EventEmitter<any>();

  stateTriggerOptions: any = {
    slideColor: 'primary',
    disabled: false
  };

  filterTemp: any = {};

  groupSet: any = null;

  showFilterPanel: boolean = false;

  querySearchTextChanged: Subject<string> = new Subject<string>();

  filterViewsOptions : any = [
    { value:"LATEST", title: "Latest" },
    { value:"VIEWS", title: "Views" },
    // { value:"S1", title: "State1" },
    // { value:"S2", title: "State2" },
    // { value:"S3", title: "State3" }
  ];

  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private location: Location,
              private mdSnackBar: MdSnackBar,
              private _sharedService: SharedService,) {
    this.querySearchTextChanged
          .debounceTime(300) // wait 300ms after the last event before emitting last event
          .distinctUntilChanged() // only emit if value is different from previous value
          .subscribe(text => {
            this.filter.search = text.trim();
            this.onQueryChanged();
          });
  }

  getPageId() {
    return this.pageId
  }


  onQueryChanged() {
    this.onFilterChanged.emit(_.pick(this.filter, ['search', 'periodStart', 'periodEnd', 'g11', 'g12', 'g13', 'views', 'stateView']));
  }

  clearSearch() {
    this.filter.search = '';
    this.onQueryChanged();
  }

  onQuerySearchTextChanged(text: string) {
    this.querySearchTextChanged.next(text);
  }

  onToggleFilterPanel() {
    this.showFilterPanel = !this.showFilterPanel;
    if(this.showFilterPanel) {
      _.each(this.filter, (v, k) => this.filterTemp[k] = v);

      let initGroupSet = this.groupSet == null;
      if(initGroupSet) this.groupSet = {};

      ['g11', 'g12', 'g13'].forEach( (g) => {
        if(this.filterTemp[g] == null) this.filterTemp[g] = [];
        else if(!Array.isArray(this.filterTemp[g])) this.filterTemp[g] = [this.filterTemp[g]];

        if(initGroupSet) {
          this.groupSet[g] = _.map(DataService.groupDataSet[g], (g:any) => g.name);
        }
      });
    }
  }

  onStateViewChanges(checked) {
    this.filterTemp.stateView = checked;
  }

  resetFilters() {
    this.filterTemp.g11 = [];
    this.filterTemp.g12 = [];
    this.filterTemp.g13 = [];
    this.filterTemp.periodStart = null;
    this.filterTemp.periodEnd = null;
    this.filterTemp.views = 'LATEST';
    this.filterTemp.stateView = false;
    this.filterTemp.search = '';
    this.applyFilters();
  }

  applyFilters() {
    ['g11', 'g12', 'g13'].forEach((g) => this.filterTemp[g] = _.map(this.filterTemp[g], (g:any) => g.value ? g.value : g));
    _.each(this.filterTemp, (v, k) => this.filter[k] = v);
    this.onQueryChanged();
    this.showFilterPanel = false;
  }

  copyLink() {
    if(DataService.copyToClipboard(window.location.href)) {
      this.mdSnackBar.open('<' + window.location.href + '> copied to clipboard', null, {duration: 1500});
    }
    else {
      this.mdSnackBar.open('Copying to clipboard failed', null, {duration: 1500});
    }
  }

  sharePage() {

  }

  showBookmarks() {
    this._sharedService.emitAction({ action: 'bookmarks', data: null});
  }

  showPosts() {

  }

}
