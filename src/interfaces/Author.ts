import { Books } from "./Books";

export interface Author {
    author_id: number;
    name: string;
    books: Books[];
}