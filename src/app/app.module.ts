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




@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

  ],
  imports: [
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    BookModule,
    RouterModule.forRoot([{
      path: 'login', loadChildren: () => import('./loginmodule/login.module').then(m => m.LoginModule)
    },{
      path: '', redirectTo: 'home', pathMatch: 'full'
    },{
      path: '**', component: NotFoundComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
