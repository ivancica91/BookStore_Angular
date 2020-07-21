import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BookService } from 'src/app/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/Book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  bookForm: FormGroup;
  myControl = new FormControl
  options: string[] = ['new', 'as new', 'good', 'bad'];
  show: boolean = false;
  book: Book;


  constructor(private activatedRoute: ActivatedRoute,
    private service: BookService,
    private router: Router) {}

      ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.service.GetBook(params['id'])
      .subscribe(Book=>{
        this.bookForm.setValue({...Book}); //ovaj red uzima postojece vrijednosti i upisuje ih u formu koju mozemo onda promijeniti
      })
  });

  this.bookForm = new FormGroup({
  id: new FormControl(),
  title: new FormControl(),
  author: new FormControl(),
  price: new FormControl(),
  description: new FormControl(),
  condition: new FormControl(),
  imageSrc: new FormControl(),
  });
}

SaveChanges(){
this.service.UpdateBook(this.bookForm.value)
.subscribe(Book => {
this.router.navigate(['home/']); //ne mogu dobiti da me nakon sejvanja vrati na book- details, kaze Cannot read property ‘id’ of undefined
})
}
}
