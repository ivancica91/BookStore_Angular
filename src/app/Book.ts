
export class Book {
  id?: number;
  title: string ;
  author: BookAuthor;
  authorId: number;
  price: number;
  description: string;
  condition: string;
  imageSrc: string;
}

export class BookAuthor
{
  id: string;
  fullName: string
}

