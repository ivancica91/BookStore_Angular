import { AuthorService } from './../../author.service';
import { Author } from './../../Author';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocomplete } from '@angular/material/autocomplete';

import { Observable } from 'rxjs';
import { BookService } from '../../book.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/Book';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  bookForm:FormGroup;
  show: boolean = false;
  authors: Author[] = [];

  constructor(
    private formbuilder:FormBuilder,
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService, ) {

      this.bookForm = new FormGroup({
      Title: new FormControl(''),
      // AuthorId: new FormControl(''),
      Author: new FormControl(''), // sta da ovdje stavim da mogu hvatat searchbyauthor?
      // FirstName: new FormControl(''),
      // LastName: new FormControl(''),
      Price: new FormControl(''),
      Description: new FormControl(''),
      Condition: new FormControl([''].toString),
      ImageUrl: new FormControl(''),

        });


  }

  ngOnInit(): void {

  }

  onChangeEvent(event: any): void {

    this.authorService.searchAuthorByFirstname(event.target.value).subscribe(s => {
      console.log(s)

    this.authors = s;

  });
  }



  Save() {
    const book: Book = {
      author: this.bookForm.controls.Author.value,
      // firstName: this.bookForm.controls.FirstName.value,
      // lastName: this.bookForm.controls.LastName.value,
      // authorId: this.bookForm.controls.AuthorId.value,
      title: this.bookForm.controls.Title.value,
      price:  this.bookForm.controls.Price.value,
      description:  this.bookForm.controls.Description.value,
      condition:  this.bookForm.controls.Condition.value,
      imageSrc:  this.bookForm.controls.ImageUrl.value
      };
      this.bookService.AddBook(book).subscribe( options => this.router.navigate(['/home']));


    };



  Cancel(){
    this.router.navigate(['/home']);
  }



}
