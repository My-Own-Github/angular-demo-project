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

  constructor() { }

  /**
   *
   *
   * @param {*} catgLst
   * @memberof DataMaintentService
   */
  setCategoryList(catgLst) {
    this.categoryLists = catgLst;
  }

  /**
   *
   *
   * @returns
   * @memberof DataMaintentService
   */
  getCategoryList() {
    return this.categoryLists;
  }
}
