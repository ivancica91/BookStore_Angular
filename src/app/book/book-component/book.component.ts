
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/Book';




@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls:['./book.component.scss']
})
export class BookComponent{
 @Input() book: Book;
 @Output() clickbook: EventEmitter<string> = new EventEmitter();
 show: boolean = false;


}


