
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/Book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  private router: Router
  book: Book;


  constructor(private bookService: BookService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) =>{
      this.bookService.GetBook(+ params.get('id')).subscribe((value: Book) => {
        this.book = value;
      });
    });
  }

DeleteBook(id){
console.log("deleting" + id);
this.bookService.DeleteBook(id).subscribe()
  this.router.navigate(['/home']);

}

}
