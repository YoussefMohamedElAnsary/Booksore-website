import { Books } from "./Books";
import { PlainUser } from "./PlainUser";

export interface Review {
    review_id: number;
    review_content: string;
    rating: number;
    book: Books;
    user: PlainUser;
}

