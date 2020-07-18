
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
  myControl = new FormControl;
  options: string[] = ['new', 'as new', 'good', 'bad'];

  constructor(private formbuilder:FormBuilder,
    private router: Router,
    private bookService: BookService) {
    this .bookForm = new FormGroup({
      Title: new FormControl('', [Validators.required]),
      Author: new FormControl(),
      Price: new FormControl(),
      Description: new FormControl(),
      Condition: new FormControl(),
      ImageUrl: new FormControl(),
    });

  }

  ngOnInit(): void {

  }

  Save() {
    const book: Book = {
    title: this.bookForm.controls.Title.value,
    author: this.bookForm.controls.Author.value,
    price:  this.bookForm.controls.Price.value,
    description:  this.bookForm.controls.Description.value,
    condition:  this.bookForm.controls.Condition.value,
    imageSrc:  this.bookForm.controls.ImageUrl.value
    };
    this.bookService.AddBook(book);
    this.router.navigate(['/home']);
  };


  Cancel(){
    this.router.navigate(['/home']);
  }



}
