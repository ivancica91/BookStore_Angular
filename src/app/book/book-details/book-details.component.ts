
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/Book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  @Input() deviceXs: boolean;


  constructor(private bookService: BookService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) =>{
      this.bookService.GetBook(+ params.get('id')).subscribe((value: Book) => {
        this.book = value;
      });
    });
  }

DeleteBook(id){
console.log("deleting " + id);
this.bookService.DeleteBook(id).subscribe (options => this.router.navigate(['/books']));   //opet ne brise prije refresha

}
}
