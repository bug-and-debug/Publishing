import { Component } from '@angular/core';
import { LoadingSpinnerService } from '../../shared/services/loadingSpinnerService';
import { Restangular } from 'ngx-restangular';
import { DataService } from '../../shared/services/dataService';
import * as _ from 'lodash';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loadingSpinnerService: LoadingSpinnerService, private restangular: Restangular) {
  	this.loadInitialData()
  }

  loadInitialData() {
  	// load group data
  	this.restangular.all('group').getList().subscribe(groups => {
        DataService.groupDataSet = _.groupBy(groups, 'groupType');
      }, () => {
      });
  }
}
