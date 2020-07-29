import { BookService } from 'src/app/book.service';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Book';
import { switchMap, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  books$: Observable<Book[]>;
  private searchTerms = new Subject<string>();

  constructor(private bookService: BookService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.books$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.bookService.searchBooks(term)),
    );
  }

}
