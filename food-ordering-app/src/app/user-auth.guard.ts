import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckUserAuthService } from './service/check-user-auth.service';
/**
 *
 *
 * @export
 * @class UserAuthGuard
 * @implements {CanActivate}
 */
@Injectable({
  providedIn: 'root'
})


export class UserAuthGuard implements CanActivate {
  /**
   *Creates an instance of UserAuthGuard.
   * @param {CheckUserAuthService} userAuth
   * @param {Router} router
   * @memberof UserAuthGuard
   */
  constructor(private userAuth: CheckUserAuthService,
    private router: Router
  ) { }
  /**
   *
   *
   * @param {ActivatedRouteSnapshot} next
   * @param {RouterStateSnapshot} state
   * @returns {(Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree)}
   * @memberof UserAuthGuard
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userAuth.isUserLogin()) {
      return true
    } else {
      this.router.navigate(['login'])
    }
  }

}
