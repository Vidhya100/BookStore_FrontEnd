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
      console.log("Got All cart items", response.data);
      this.cartlist = response.data;
      console.log('BookIds : ', this.cartlist);
    });
  }

  decreaseQty(cartId: any, bookQty: any) {
    this.cart.updateCart(cartId, (bookQty - 1)).subscribe((response: any) => {
      console.log("Cart Qty decreased",response);
      this.getCartlist();
    })
  }

  increaseQty(cartId: any, bookQty: any) 
  {
    console.log(bookQty);
    this.cart.updateCart(cartId, (bookQty + 1)).subscribe((response: any) => {
      console.log("Cart Qty increased",response);
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
