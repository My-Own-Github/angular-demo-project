import { Injectable } from '@angular/core';
/**
 *
 *
 * @export
 * @class CartItemService
 */
@Injectable({
  providedIn: 'root'
})

export class CartItemService {
  /**
   *
   *
   * @type {Array<any>}
   * @memberof CartItemService
   */
  cartItems: Array<any>;

  constructor() { }
  /**
   *
   *
   * @returns {Array<any>}
   * @memberof CartItemService
   */
  getCartItems(): Array<any> {
    if (this.cartItems) {
      return this.cartItems;
    } else {
      this.cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
      return this.cartItems;
    }
  }
  /**
   *
   *
   * @param {*} item
   * @param {boolean} [opt]
   * @memberof CartItemService
   */
  setCartItems(item: any, opt?: boolean) {
    if (!this.cartItems)
      this.cartItems = new Array();
    if (Array.isArray(item) && item.length === 0 && opt)
      this.cartItems = item;
    if (this.cartItems && this.cartItems.length === 0 && !opt) {
      this.cartItems.push(item);
    } else if (this.cartItems && this.cartItems.length > 0 && !opt) {
      let indx: any = this.cartItems.indexOf(item);
      if (indx === -1) {
        this.cartItems.push(item);
      } else {
        this.cartItems[indx] = item;
      }
    }
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartItems))
  }
}
