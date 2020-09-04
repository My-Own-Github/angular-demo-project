import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  cartItems: Array<any>;

  constructor() { }

  getCartItems(): Array<any> {
    return this.cartItems;
  }

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
  }

  addItem(item: any) {
  }
}
