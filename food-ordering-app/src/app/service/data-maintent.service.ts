import { Injectable } from '@angular/core';
/**
 *
 *
 * @export
 * @class DataMaintentService
 */
@Injectable({
  providedIn: 'root'
})
export class DataMaintentService {
  categoryLists: Array<any>;
  currentItemData: Array<any>;

  constructor() { }

  /**
   *
   *
   * @param {*} catgLst
   * @memberof DataMaintentService
   */
  setCategoryList(catgLst) {
    this.categoryLists = catgLst;
    sessionStorage.setItem("categoryList", JSON.stringify(this.categoryLists))
  }

  /**
   *
   *
   * @returns
   * @memberof DataMaintentService
   */
  getCategoryList() {
    if(this.categoryLists){
      return this.categoryLists;
    } else {
      this.categoryLists = JSON.parse(sessionStorage.getItem('categoryList'));
      return this.categoryLists;
    }
  }

  setCurrentCartItemData(itemArray, catgData){
    // let index: any = this.categoryLists.indexOf(catgData.id);
    this.categoryLists[catgData.id].items = itemArray;
    sessionStorage.setItem("categoryList", JSON.stringify(this.categoryLists))
  }
  getCurrentCartItemData(){
    return this.currentItemData;
  }
}
