import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';
import { FeedbackService } from 'src/app/services/feedback/feedback.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit{

  bookId = localStorage.getItem('bookId')
  //bookId:any;
  book:any;
  ratingPoint:any=0;
  comment:any;
  feedbackList:any;
  addedToCart:any=false;

  constructor(private bookservice:BookService,private feedback: FeedbackService) { }

  ngOnInit(): void {
    //this.bookId = this.activate.snapshot.paramMap.get('bookId');
    this.bookId = localStorage.getItem('bookId')
    this.getBookById(this.bookId);
    this.getAllFeedback(this.bookId);
  }

  getBookById(bookId:any){
    this.bookservice.getBookById(bookId).subscribe((response: any) => {
      console.log(response);
      this.book = response.response;
      console.log(response.response);
    });
  }

  getAllFeedback(bookId: any){
    this.feedback.getAllFeedback(bookId).subscribe((response: any) => {
      console.log(response);
      this.feedbackList = response.data;
    });
  }

  addFeedback(){
    let reqData = {
      Rating: parseInt(this.ratingPoint),
      Comment: this.comment,
      BookId: this.book.bookId
    }
    this.feedback.addFeedback(reqData).subscribe((response: any) => {
      console.log("Feedback submitted successfully", response);
      this.getAllFeedback(this.bookId);
    });
    this.comment='';
    this.ratingPoint=0;
  }
}
