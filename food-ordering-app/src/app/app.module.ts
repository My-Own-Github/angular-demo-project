import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { CategoriesListsComponent } from './components/categories-lists/categories-lists.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ShowCartComponent } from './components/show-cart/show-cart.component';
import { CheckUserAuthService } from './service/check-user-auth.service';
import { UserAuthGuard } from './user-auth.guard';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { CartItemService } from './service/cart-item.service';
import { DataMaintentService } from './service/data-maintent.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    CategoriesListsComponent,
    ItemsListComponent,
    ShowCartComponent,
    HomePageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CheckUserAuthService,
    UserAuthGuard,
    CartItemService,
    DataMaintentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
