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
 // myControl = new FormControl
 // options: string[] = ['new', 'as new', 'good', 'bad'];
  show: boolean = false;
  book: Book;


  constructor(private activatedRoute: ActivatedRoute,
    private service: BookService,
    private router: Router) {}

      ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.service.GetBook(params['id'])
      .subscribe(Book=>{
        this.bookForm.patchValue({...Book}); //ovaj red uzima postojece vrijednosti i upisuje ih u formu koju mozemo onda promijeniti..
        //umjesto setValue stavio patchValue da mogu promijeniti samo neke vrijednosti, tj da mi ne trazi sve..
        // (Use the setValue() method to set a new value for an individual control. The setValue() method strictly adheres to the structure of the form group and replaces the entire value for the control.)
        //Use the patchValue() method to replace any properties defined in the object that have changed in the form model.
      })
  });

  this.bookForm = new FormGroup({
  id: new FormControl(),
  title: new FormControl(),
  author: new FormControl(),
  authorId: new FormControl(),   //  ovdje mora bit id jer u backu uzimmao id za update!!!
  price: new FormControl(),
  description: new FormControl(),
  condition: new FormControl([''].toString),
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
