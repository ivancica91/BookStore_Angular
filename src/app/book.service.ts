import { MatAutocomplete } from '@angular/material/autocomplete';
import { Book } from './Book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [{

    id: 0,
    title: "Harry Potter" ,
    author: "J.K: Rowling",
    price: 13,
    description: "First book about Harry Potter.",
    condition: "Well preserved",
    imageSrc: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg"
  },{

    id: 1,
    title: "To Kill a Mockingbird" ,
    author: "Harper Lee",
    price: 9,
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it",
    condition: "new",
    imageSrc: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg"

  },{

    id: 2,
    title: "The Hunger Games" ,
    author: "Suzanne Collins",
    price: 16,
    description: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts.",
    condition: "Preserved",
    imageSrc: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg"
  },{

    id: 3,
    title: "Pride and Prejudice" ,
    author: "Jane Austen, Anna Quindlen (Introduction)",
    price: 14,
    description: "The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.",
    condition: "Almost as new",
    imageSrc: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885.jpg"
  },{

    id: 4,
    title: "Animal Farm" ,
    author: "George Orwell",
    price: 18,
    description: "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality.",
    condition: "Almost as new",
    imageSrc: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1325861570l/170448.jpg"
  },{

    id: 5,
    title: "The Book Thief" ,
    author: "Markus Zusak",
    price: 21,
    description: "By her brother's graveside, Liesel's life is changed when she picks up a single object, partially hidden in the snow. It is The Gravedigger's Handbook, left behind there by accident, and it is her first act of book thievery.",
    condition: "Good",
    imageSrc: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY475_.jpg"
  }];

  constructor() { }


 GetBooks(): Book[] {
  return this.books;
 }

 GetBook(id: number): Book{
  return this.books.find(item => item.id === id);
 }
 //tu negdje dodati i za DeleteBook? i UpdateBook

 AddBook(book: Book){
   book.id = this.books.length;
   this.books.push(book)
 }
}


