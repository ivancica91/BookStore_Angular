
import { NgModule } from "@angular/core";
import { BookDetailsComponent } from './book-details/book-details.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookComponent } from './book-component/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
declarations:[
  AddBookComponent,
  BookDetailsComponent,
  BookComponent,
  BookListComponent],
imports: [
  CommonModule,
  MatAutocompleteModule,
  RouterModule.forChild([{
    path: 'home', component: BookListComponent
    }, {
      path: 'book/add', component: AddBookComponent
    }, {
      path: 'book/:id', component: BookDetailsComponent
    }]),
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  ]
})
export class BookModule {

}
