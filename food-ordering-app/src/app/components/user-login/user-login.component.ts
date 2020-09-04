import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchDataService } from 'src/app/service/fetch-data.service';
/**
 *
 *
 * @export
 * @class UserLoginComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  providers: [FetchDataService]
})
export class UserLoginComponent implements OnInit {
  /**
   *Creates an instance of UserLoginComponent.
   * @param {Router} router
   * @param {FetchDataService} fetchData
   * @memberof UserLoginComponent
   */
  constructor(private router: Router, private fetchData: FetchDataService) { }
  /**
   *
   *
   * @type {boolean}
   * @memberof UserLoginComponent
   */
  isSuccessMsg: boolean = false;
  serverSideMessages: string;
  isServerError: boolean = false;

  ngOnInit() {
  }

  /**
   *
   *
   * @param {NgForm} form
   * @memberof UserLoginComponent
   */
  onSubmit(form: NgForm) {
    this.fetchData.loginUser(form.value).subscribe(
      (res: any) => {
        this.isSuccessMsg = true;
        sessionStorage.setItem("userAuthData", JSON.stringify(res))
        setTimeout(() => this.isSuccessMsg = false, 3000);
        this.resetForm(form)
        this.router.navigate(['homePage'])
      },
      err => {
        if (err.status === 422)
          this.serverSideMessages = err.error.join('<br/>')
        else if (err.status === 404) {
          this.isServerError = true;
          this.serverSideMessages = err.error.message;
          setTimeout(() => this.isServerError = false, 3000);
          this.resetForm(form)
          this.router.navigate(["login"])
        }
      }
    )
  }

  /**
   *
   *
   * @param {NgForm} form
   * @memberof UserLoginComponent
   */
  resetForm(form: NgForm) {
    this.fetchData.user = {
      userName: '',
      password: ''
    };
    form.resetForm();
  }

}
