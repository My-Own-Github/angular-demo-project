import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  cartItems: Array<any>;

  constructor() { }

  getCartItems():Array<any> {
    return this.cartItems;
  }

  setCartItems(item: any) {
    if(!this.cartItems)
      this.cartItems = new Array();
    if (this.cartItems.length === 0) {
      this.cartItems.push(item);
    } else {
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
