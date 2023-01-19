import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookService/book.service';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {

  searchbook:any;
  token:any;
  //bookarray:any;
  bookList:any;
  totalbooks:any;
  sortBy:any='Sort by relevance';
  searchWord:any;
  subscription:any;
  message:any;

  constructor(private book:BookService, private router: Router, private data: DataService){}

  ngOnInit(): void {
    this.getAllbooks();  
    this.subscription = this.data.currentData.subscribe((message: { data: any[]; }) => {
      this.message = message;
      console.log("display card search data======", message.data[0]);
      this.searchWord=message.data[0]
      // this.getAllNotes();
    }) 
  }
  
  getAllbooks(){
     this.book.getAllbooks().subscribe((response:any)=> {
      console.log( response);
      this.bookList = response.data;
      //this.bookList.reverse();
      console.log("List: ",this.bookList);
      
      })
    }
  quickView(bookId:any){
    this.router.navigateByUrl("/dashboard/quickView");
      localStorage.setItem('bookId',bookId)
      console.log(bookId);
      
      
    }
  
    relevence(){  
      this.bookList = this.bookList.sort((x: any, y: any) => x.bookId - y.bookId);
      this.sortBy="Sort by relevence";
    }
  
    PriceLowToHigh(){
      this.bookList = this.bookList.sort((x: any, y: any) => x.discountPrice - y.discountPrice);
      this.sortBy="Price -- Low to High";
    }
  
    PriceHighToLow(){ 
      this.bookList = this.bookList.sort((x: any, y: any) => y.discountPrice - x.discountPrice);
      this.sortBy="Price -- High to low";
    }
  
    newestFirst(){
       this.bookList = this.bookList.sort((x: any, y: any) => y.bookId - x.bookId);
       this.sortBy="Newest First";
    }
}
