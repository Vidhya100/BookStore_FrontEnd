import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {

  token:any;
  //bookarray:any;
  bookList:any;
  totalbooks:any;
  sortBy:any='Sort by relevance';

  constructor(private book:BookService, private router: Router ){}

  ngOnInit(): void {
    this.getAllbooks();    
  }
  
  getAllbooks(){
     this.book.getAllbooks().subscribe((request:any)=> {
      console.log("request data", request);
      this.bookList = request.data;
      this.bookList.reverse();
      
      })
    }
  quickView(bookId:any){
      localStorage.setItem('bookId',bookId)
      console.log(bookId);
      
      this.router.navigateByUrl("/dashboard/quick-view");
    }
}
