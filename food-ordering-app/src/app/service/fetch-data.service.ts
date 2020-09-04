import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Categories } from '../model/categories.model';
/**
 *
 *
 * @export
 * @class FetchDataService
 */
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  /**
   *
   *
   * @type {User}
   * @memberof FetchDataService
   */
  user: User = {
    userName: '',
    password: ''
  };
  /**
   *Creates an instance of FetchDataService.
   * @param {HttpClient} http
   * @param {Router} router
   * @memberof FetchDataService
   */
  constructor(private http: HttpClient, private router: Router) { }
  /**
   *
   *
   * @param {User} user
   * @returns {Observable<User>}
   * @memberof FetchDataService
   */
  loginUser(user: User): Observable<User> {
    return this.http.post<User>(environment.apiBaseUrl + '/authenticate', user);
  }
  /**
   *
   *
   * @returns {Observable<Categories[]>}
   * @memberof FetchDataService
   */
  getAllCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(environment.apiBaseUrl + '/allFoodsCategories');
  }

}
