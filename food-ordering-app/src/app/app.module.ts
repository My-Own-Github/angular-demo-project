import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import bootstrap from "bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { CategoriesListsComponent } from './components/categories-lists/categories-lists.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ShowCartComponent } from './components/show-cart/show-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    CategoriesListsComponent,
    ItemsListComponent,
    ShowCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
