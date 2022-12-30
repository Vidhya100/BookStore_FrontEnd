import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/addressService/address.service';
import { CartService } from 'src/app/services/cartService/cart.service';
import { OrderService } from 'src/app/services/orderService/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartlist: any;
  bookId:any;
  step: number = 0;

  fullName: any;
  mobileNumber: any;
  addressList: any;
  addressId = 0;
  addressObj: any;
  isAddEditAddress: boolean = false;
  edit =false;
  address: any;
  city: any;
  state: any;
  addressType: any

  constructor(private cart: CartService,private router:Router,private addresss:AddressService,
    private order: OrderService) {}

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

  getAllAddress() {
    this.addresss.getAllAddress().subscribe((response: any) => {
      console.log(response.data);
      this.addressList = response.data;
    })
  }

  addOrder(){
    if (this.cartlist?.length > 0){
      console.log("Cart list",this.cartlist.bookId);
      let data={
        BookId : parseInt(this.bookId),
        AddressId : this.addressId,
      }
      this.order.placeOrder(data).subscribe((response:any) =>{
        console.log("Placed order",response);
        this.getCartlist();
        this.step=0;
        this.router.navigateByUrl('/dashboard/orderPlaced')
      })
    }
  }
}
