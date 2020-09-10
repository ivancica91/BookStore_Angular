import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BookModule } from './book/book.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BookSearchComponent } from './book/book-search/book-search.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MediaObserver } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { HeaderComponent } from './book/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    BookSearchComponent,
    HeaderComponent,


  ],
  imports: [
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BookModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule.forRoot([{
      path: 'login', loadChildren: () => import('./loginmodule/login.module').then(m => m.LoginModule)
    },{
      path: '', redirectTo: 'books', pathMatch: 'full'
    },{
      path: '**', component: NotFoundComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private mediaObserver: MediaObserver) {} //nne znam treba li mi ovo mediaObserver
 }
