import {Books} from './Books.ts'
import {Order} from './Order.ts'

export interface Order_Book {
    order_id: number;
    book_id: number;
    quantity: number;
  }
