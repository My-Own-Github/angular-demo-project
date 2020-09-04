import { Injectable } from '@angular/core';
/**
 *
 *
 * @export
 * @class CheckUserAuthService
 */
@Injectable({
  providedIn: 'root'
})
export class CheckUserAuthService {

  constructor() { }
  /**
   *
   *
   * @returns
   * @memberof CheckUserAuthService
   */
  isUserLogin() {
    let authData = JSON.parse(sessionStorage.getItem('userAuthData'));
    if (authData && authData.status) {
      return true;
    } else {
      return false;
    }
  }
}
