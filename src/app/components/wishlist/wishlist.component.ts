import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlistService/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlist:any;
 
  constructor(private wish: WishlistService) { }

  ngOnInit(): void {
    this.getWishlist();
  }
 
  getWishlist(){
    this.wish.getWishList().subscribe((response: any) => {
      console.log(response.data);
      this.wishlist = response.data;
    });    
  }
  removeFromWishlist(wishistId:any){
    this.wish.removeFromWishlist(wishistId).subscribe((response: any) => {
      console.log("Removed",response.data);
      this.getWishlist();
    });
  }
}
