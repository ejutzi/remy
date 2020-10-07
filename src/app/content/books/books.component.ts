import { Component, OnInit } from '@angular/core';
import { Book } from './book.interface';

import { BOOKS } from './book-mock';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = BOOKS;

  constructor() { }

  ngOnInit(): void {
  }

}
