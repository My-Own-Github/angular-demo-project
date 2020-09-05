import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/service/fetch-data.service';
import { Router } from '@angular/router';
import { DataMaintentService } from 'src/app/service/data-maintent.service';
/**
 *
 *
 * @export
 * @class CategoriesListsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-categories-lists',
  templateUrl: './categories-lists.component.html',
  styleUrls: ['./categories-lists.component.scss']
})

export class CategoriesListsComponent implements OnInit {
  /**
   *
   *
   * @type {Array<object>}
   * @memberof CategoriesListsComponent
   */
  categoriesList: Array<object>;
  constructor(private fetchData: FetchDataService,
              private router: Router,
              private dataService: DataMaintentService
  ) { }

  /**
   *
   *
   * @memberof CategoriesListsComponent
   */
  ngOnInit() {
    let categoriesList = this.dataService.getCategoryList();
    if(!categoriesList){
      this.fetchData.getAllCategories().subscribe((catgLst: any) => {
        this.dataService.setCategoryList(catgLst.lst);
        this.categoriesList = this.dataService.getCategoryList();
      })
    } else{
      this.categoriesList = this.dataService.getCategoryList();
    }
  }

  /**
   *
   *
   * @param {*} catgData
   * @memberof CategoriesListsComponent
   */
  goToCategDetailPage(catgData: any) {
    this.router.navigate(["category/" + catgData.id], { state: { "data": catgData } })
  }

}
