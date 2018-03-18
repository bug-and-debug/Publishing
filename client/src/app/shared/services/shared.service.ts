import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './authService'
import * as _ from "lodash";

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


  static canDeleteArticle(article) {
    // check user is article owner
    if (!SharedService.isArticleOwner(AuthService.getCurrentUser()['_id'], article))
      return false
    // check there are other's opinions
    if (SharedService.hasOthersOpinions(AuthService.getCurrentUser()['_id'], article))
      return false
    //check there are other's agree/Disagree
    if (SharedService.hasOthersVotes(AuthService.getCurrentUser()['_id'], article))
      return false
    //console.log(article)
    return true
  }

  static hasOthersOpinions(userId, article) {
    return _.findIndex(article.comments, comment => comment['user'].toString() !== userId) >= 0
  }

  static hasOthersVotes(userId, article) {
    _.flatten(_.concat(article['groups'], article['comments'])
                .map(item => _.toPairs(item['votes'])
                              .map(vote => vote[1])
                  )
              ).forEach(votes => {
                if (_.findIndex(votes, vote => vote !== userId) >= 0) {
                  console.log('has other vote')
                  return true
                }
              })
    return false
  }

  static isArticleOwner(userId, article) {
    return _.findIndex(article.users, user => user['_id'].toString() === userId) >= 0
  }
}
