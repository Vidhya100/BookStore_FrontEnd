import { Component } from '@angular/core';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent {
  bookList:any;
  sortBy:any="Sort by relevence";
  defaultImage:any="https://www.prachiindia.com/ModuleFiles/Items/Cover_image.png";
  searchString:any;
  totalbooks:any;
}
