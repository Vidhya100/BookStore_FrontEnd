import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { GetBookComponent } from './components/get-book/get-book.component';


import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';
import { OrdersComponent } from './components/orders/orders.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';

import { RegisterLoginComponent } from './components/register-login/register-login.component';
import { ResetComponent } from './components/reset/reset.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {path : 'registerLogin' , component: RegisterLoginComponent},
  {path : 'login' , component: LoginComponent},
  {path : 'forgetPassword' , component: ForgetPasswordComponent},
  {path : 'resetPassword' , component: ResetComponent},
  //{path : 'quickView' , component: QuickViewComponent},
  {path : 'dashboard' , component: HomeComponent,
  children:[
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path : 'getAllBooks' , component: GetAllBooksComponent},
    {path : 'quickView' , component: QuickViewComponent},
    {path : 'cart' , component: CartComponent},
    {path : 'wishlist' , component: WishlistComponent},
    {path : 'orderPlaced' , component: OrderPlacedComponent},
    {path : 'orders' , component: OrdersComponent}
    
  
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
