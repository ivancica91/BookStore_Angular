import { BookService } from '../../book.service';
import { Book } from '../../Book';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
    this .bookForm = this .formbuilder.group({
      Title: ['', [Validators.required, Validators.minLength(3)]],
      Author: ['', [Validators.required, Validators.minLength(3)]],
      Price: ['', [Validators.required, Validators.minLength(1)]],
      Description: ['', [Validators.required, Validators.minLength(20)]],
      Condition: [''],
      ImageUrl: ['']
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

}


  Cancel(){
    this.router.navigate(['/home']);
  }

}
