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
    this.getAllAddress();
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

  addNewAddress() {
    this.isAddEditAddress = true;
    this.addressObj = [];
    this.address = '';
    this.fullName = '';
    this.mobileNumber = '';
    this.city = '';
    this.state = '';
    this.addressType = '';
  }

  editAddress() {
    this.edit = true;
  }
  
  updateAddress(addressId: any) {
    if (this.address && this.city && this.state && this.addressType && addressId != '') {
      let reqData = {
        address: this.address,
        city: this.city,
        state: this.state,
        type: Number(this.addressType),
        addressId: addressId
      }
      console.log(reqData)
      this.addresss.updateAddress(reqData).subscribe((response: any) => {
        console.log("Address updated successfully", response);
        this.getAllAddress();
      })
    }
  }

  addAddress(){
    if(this.address && this.city && this.state && this.addressType != ''){
      let reqData = {
        address: this.address,
        city: this.city,
        state: this.state,
        type: Number(this.addressType)
      }
      this.address.addAddress(reqData).subscribe((response: any) => {
        console.log("New Address Added successfully", response);
        this.getAllAddress();
      })
    }
  }
}
