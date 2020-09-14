
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
import { EditBookComponent } from './edit-book/edit-book.component';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
declarations:[
  AddBookComponent,
  EditBookComponent,
  BookDetailsComponent,
  BookComponent,
  BookListComponent
  ],
imports: [
  CommonModule,
  MatGridListModule,
  MatAutocompleteModule,
  MatTooltipModule,
  RouterModule.forChild([{
    path: 'books', component: BookListComponent
    },{
      path: 'book/:id/edit', component: EditBookComponent
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
  FlexLayoutModule,
  MatSelectModule
  ]
})
export class BookModule {

}
