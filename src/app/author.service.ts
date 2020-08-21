import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Author, AuthorPost } from './Author';

const authorUrl = 'http://localhost:44384/api/Authors/'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

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
AddAuthor(author: AuthorPost): Observable<Author>{
  return this.http.post<Author>(authorUrl, author);
 }

searchAuthorByFirstname(firstName: string) : Observable<Author[]> {
  return this.http.get<Author[]>(`http://localhost:44384/api/Authors/FindAuthor?FirstName=${firstName}&Page=1&Limit=10`)
}
}
