import { Component } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent {

  token:any;
  bookarray:any;

  constructor( private bookService: BookService ) {  }

  ngOnInit(): void {
    this.getAllbooks()    
  }

  getAllbooks(){
     this.bookService.getAllbooks().subscribe((request:any)=> {
      console.log("request data", request);
      this.bookarray = request.data;
      this.bookarray.reverse()
      //this.notesArray = this.notesArray.filter((noteData: any) => {
       // return this.noteData.trash == false && this.noteData.archive == false;
      /* this.bookarray = this.notesArray.filter((notedata: any) => {
        return notedata.trash === false && notedata.archive == false;*/
      
      })
    }
}
