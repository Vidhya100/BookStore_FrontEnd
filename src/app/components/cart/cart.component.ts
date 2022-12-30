import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartlist: any;
  bookId:any;
  step: number = 0;

  constructor(private cart: CartService,private router:Router) {}

  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId');
    this.getCartlist();
  }

   getCartlist() {
    this.cart.getCartItems().subscribe((response: any) => {
      console.log(response.data);
      this.cartlist = response.data;
      console.log('BookIds : ', this.cartlist);
    });
  }

  decreaseQty(cartId: any, bookQuantity: any) {
    console.log(bookQuantity);
    this.cart.updateCart(cartId, (bookQuantity - 1)).subscribe((response: any) => {
      console.log(response);
      this.getCartlist();
    })
  }

  increaseQty(cartId: any, BookQuantity: any) 
  {
    console.log(BookQuantity);
    this.cart.updateCart(cartId, (BookQuantity + 1)).subscribe((response: any) => {
      console.log(response);
      this.getCartlist();
    })
  }
  
  removeFromCart(cartId: any) {
    this.cart.removeFromCart(cartId).subscribe((response: any) => {
      console.log("Removed from cart");
      this.getCartlist();
    })
  }

  stepUp2() {
    this.step = 2;
  }

  stepUp() {
    this.step = 1;
  }
}
