import { Books } from "./Books";

export interface Genre {
    id: number;
    name: string;
    books: Books[];
}