import { BookAuthor, PostBook } from './../../Book';
import { AuthorService } from './../../author.service';
import { Author } from './../../Author';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocomplete } from '@angular/material/autocomplete';

import { Observable } from 'rxjs';
import { BookService } from '../../book.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/Book';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent{
  bookForm:FormGroup;
  show: boolean = false;
  authors: Author[] = [];
  @Input() deviceXs: boolean;

  constructor(
    private formbuilder:FormBuilder,
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService) {

    this.bookForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      authorName: new FormControl(undefined),
      authorId: new FormControl(undefined),
      price: new FormControl(0, [Validators.min(5)]),
      description: new FormControl(''),
      condition: new FormControl('new', [Validators.required]),
      imageUrl: new FormControl('')});
  }

  onAuthorChange(event: any): void {
    this.authorService.searchAuthorByFirstname(event.target.value).subscribe(response => {
      this.authors = response;
      this.bookForm.controls.authorName.setValue(event.target.value);
      this.bookForm.controls.authorId.setValue(undefined);
    });
  }

  Save() {
    const newBook : PostBook = {
        authorId: this.bookForm.controls.authorId.value ?? undefined,
        authorFullName: this.bookForm.controls.authorId != null ? this.bookForm.controls.authorName.value : undefined, // ako je authorID != null, AuthorFullName = AuthorId, else authorName = undefined
        title: this.bookForm.controls.title.value,
        price: this.bookForm.controls.price.value,
        description: this.bookForm.controls.description.value,
        imageSrc: this.bookForm.controls.imageUrl.value,
        condition: this.bookForm.controls.condition.value
    }

    this.bookService.AddBook(newBook).subscribe(bookId => this.router.navigate(['book', bookId]));
  };



  onAuthorClick(author: any) {
      this.bookForm.controls.authorId.setValue(author.id);
      this.bookForm.controls.authorName.setValue(author.firstName + ' ' + author.lastName);
      this.authors = [];
  };

  Cancel(){
    //console.log(this.bookForm)
    this.router.navigate(['/books'])
  };
}
