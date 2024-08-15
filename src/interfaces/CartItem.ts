import { Books } from "./Books";
import { Cart } from "./Cart";

export interface CartItem{
    cart:Cart,
    book:Books,
    quantity:number,

}