import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemService } from 'src/app/service/cart-item.service';
/**
 *
 *
 * @export
 * @class ShowCartComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.scss']
})
export class ShowCartComponent implements OnInit {
  /**
   *
   *
   * @type {Array<any>}
   * @memberof ShowCartComponent
   */
  cartItemsList: Array<any>;
  payAmount: number = 0;
  total: number;
  /**
   *Creates an instance of ShowCartComponent.
   * @param {Router} router
   * @memberof ShowCartComponent
   */
  constructor(private router: Router, private cartItemService: CartItemService) { }

  /**
   *
   *
   * @memberof ShowCartComponent
   */
  ngOnInit() {
    this.cartItemsList = history.state.data;
    if(this.cartItemsList){
      this.ItemsCalculation(this.cartItemsList)
    } else {
      this.cartItemsList = JSON.parse(sessionStorage.getItem('cartItems'));
      this.ItemsCalculation(this.cartItemsList)
    }

  }

  /**
   *
   *
   * @memberof ShowCartComponent
   */
  goToLogin() {
    this.cartItemService.setCartItems([], true);
    sessionStorage.clear();
    this.router.navigate(['login'])
  }


/**
 *
 *
 * @param {Array<any>} cartLsts
 * @memberof ShowCartComponent
 */
ItemsCalculation(cartLsts: Array<any>){
    cartLsts.forEach(item => {
      this.payAmount = this.payAmount + item.amount;
    })
    this.total = this.payAmount + 10;
  }

}
