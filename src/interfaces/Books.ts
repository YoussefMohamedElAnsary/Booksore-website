import { Author } from "./Author";
import { Genre } from "./Genre";
import { Review } from "./Review";

export interface Books {
    id: number;
    book_name: string;
    description: string;
    num_sales: number;
    rates: number;
    price: number;
    quantity_in_stock: number;
    image_url: string;
    genre: Genre;
    author: Author;
    reviews: Review[];
}