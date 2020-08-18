import { Author } from './Author';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Book } from './Book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import { title } from 'process';


const baseUrl = 'http://localhost:44384/api/Books/';


@Injectable({
  providedIn: 'root'
})
export class BookService {



  constructor(private http:HttpClient) { }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


 GetBooks(): Observable <Book[]> {
  return this.http.get<Book[]>(baseUrl);
 }

 GetBook(id: number): Observable <Book>{
  return this.http.get<Book>(baseUrl + id);
 }

 AddBook(book: Book): Observable<Book>{
  return this.http.post<Book>(baseUrl, book);
 }

 UpdateBook(book: Book): Observable <any> {
 return this.http.put(baseUrl + book.id, book);
 }

 DeleteBook(id: number): Observable <any>{
   return this.http.delete<Book>(baseUrl + id);
 }

 searchBooks(title: string): Observable<Book[]> {
   if (!title.trim()) {
     //ako nije search term, vrati prazan array
     return of([]);
   }
   return this.http.get<Book[]>(`${baseUrl + 'FindBooksWithTitle?bookTitle=' + title}`).pipe(
    tap(x => x.length ?
      console.log(`found books matching "${title}"`) :
      console.log(`no books matching "${title}"`)),
      catchError(this.handleError<Book[]>('searchBooks', []))

   );
 }

//  GetAuthors(): Observable <Author[]> {
//   return this.http.get<Author[]>(authorUrl);
//  }

//  GetAuthor(id: number): Observable <Author> {
//    return this.http.get<Author> (authorUrl + id)
//  }


}

