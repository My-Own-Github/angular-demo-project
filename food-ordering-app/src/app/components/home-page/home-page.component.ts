import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemService } from 'src/app/service/cart-item.service';

/**
 *
 *
 * @export
 * @class HomePageComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  /**
   *
   *
   * @type {Array<any>}
   * @memberof HomePageComponent
   */
  cartItems: Array<any>;
  showCartButton: boolean = false;

  /**
   *Creates an instance of HomePageComponent.
   * @param {Router} router
   * @memberof HomePageComponent
   */
  constructor(private router: Router, private cartItemService: CartItemService) { }

  /**
   *
   *
   * @memberof HomePageComponent
   */
  ngOnInit() {
    // this.cartItems = history.state.data;
    this.cartItems = this.cartItemService.getCartItems()
    if (this.cartItems) {
      this.showCartButton = true;
    }
  }

  /**
   *
   *
   * @memberof HomePageComponent
   */
  goToCartPage() {
    this.router.navigate(['showCart'], { state: { "data": this.cartItems } })
  }

}
