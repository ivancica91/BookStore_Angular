import { MatAutocomplete } from '@angular/material/autocomplete';
import { Book } from './Book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:44384/api/Books/';

@Injectable({
  providedIn: 'root'
})
export class BookService {



  constructor(private http:HttpClient) { }


 GetBooks(): Observable <Book[]> {
  return this.http.get<Book[]>(baseUrl);
 }

 GetBook(id: number): Observable <Book>{
  return this.http.get<Book>(baseUrl + id);
 }
 //tu negdje dodati i za DeleteBook? i UpdateBook

 AddBook(book: Book): Observable<Book>{
  return this.http.post<Book>(baseUrl, book);
 }

 UpdateBook(book: Book): Observable <any> {
return this.http.put(baseUrl + book.id, book);
}

 DeleteBook(id: number): Observable <any>{
   return this.http.delete<Book>(baseUrl + id);
 }


}

