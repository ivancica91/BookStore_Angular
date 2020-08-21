
export interface Book {
  id?: number;
  title: string ;
  author: BookAuthor;
  authorId: number;
  price: number;
  description: string;
  condition: string;
  imageSrc: string;
}

export interface BookAuthor
{
  id: string;
  fullName: string
}

export interface PostBook
{
  authorId?: number;
  authorFullName? : string;
  title: string;
  description: string;
  condition: string;
  price: number;
  imageSrc: string;
}

