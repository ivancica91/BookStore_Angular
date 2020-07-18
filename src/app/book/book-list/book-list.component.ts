import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Book';
import { BookService } from 'src/app/book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[];


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.GetBooks().subscribe((value: Book[]) => {
      this.books = value;
    });
    }
}
