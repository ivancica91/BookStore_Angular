import { MatAutocomplete } from '@angular/material/autocomplete';
import { Book } from './Book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {



  constructor(private http:HttpClient) { }


 GetBooks(): Observable <Book[]> {
  return this.http.get<Book[]>('http://localhost:44384/api/Books');
 }

 GetBook(id: number): Observable <Book>{
  return this.http.get<Book>('http://localhost:44384/api/Books/' + id);
 }
 //tu negdje dodati i za DeleteBook? i UpdateBook

 AddBook(book: Book): Observable<Book>{
  return this.http.post<Book>('http://localhost:44384/api/Books', book);
 }

 DeleteBook(id: number): Observable <any>{
   return this.http.delete<Book>('http://localhost:44384/api/Books/' + id);

}
}

