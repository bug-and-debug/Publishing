import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SharedService {

  private action = new Subject<string>();
  action$ = this.action.asObservable();

  constructor(private _http: HttpClient) {

  }

  emitAction(data: any) {
    this.action.next(data);
  }

  getLocation() {
    return new Promise((resolve, reject) => {
      this._http.get('http://ip-api.com/json').subscribe(data => {
        if (data)
          resolve(data)
        else
          reject()
      });
    });
  }
}
