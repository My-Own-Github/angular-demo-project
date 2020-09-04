import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserAuthGuard } from './user-auth.guard';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ShowCartComponent } from './components/show-cart/show-cart.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'homePage', component: HomePageComponent, canActivate:[UserAuthGuard]
  },
  {
    path: '', redirectTo: '/homePage', pathMatch: 'full'
  },
  {
    path: 'login', pathMatch: 'full', component: UserLoginComponent
  },
  {
    path:'category/:id', component: ItemsListComponent
  },
  {
    path:'showCart', component: ShowCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
