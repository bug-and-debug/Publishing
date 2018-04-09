import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { AuthService } from '../../shared/services/authService';
import { Subscription } from 'rxjs/Subscription';
import { SharedService } from '../../shared/services/shared.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [AuthService]
})
export class FooterComponent {
  title = 'footer';

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
