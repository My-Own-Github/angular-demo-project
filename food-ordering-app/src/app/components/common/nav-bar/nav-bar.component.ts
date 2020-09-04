import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 *
 *
 * @export
 * @class NavBarComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  /**
   *Creates an instance of NavBarComponent.
   * @param {Router} router
   * @memberof NavBarComponent
   */
  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   *
   *
   * @memberof NavBarComponent
   */
  logOut() {
    sessionStorage.removeItem("userAuthData")
    this.router.navigate(["login"])
  }

}
