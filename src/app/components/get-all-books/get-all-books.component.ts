import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookService/book.service';

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

  constructor(private book:BookService, private router: Router ){}

  ngOnInit(): void {
    this.getAllbooks();  
   // this.data.incomingData.subscribe((response) => {
      //this.searchbook = response;
   // })  
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
    this.router.navigateByUrl("/quickView");
      localStorage.setItem('bookId',bookId)
      console.log(bookId);
      
      
    }
}
