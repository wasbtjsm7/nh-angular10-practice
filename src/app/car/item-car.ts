import { fromEventPattern } from 'rxjs'

import { } from ''
import { Book } from '../books/book/book';

export interface ItemCar {
  book: Book;
  count: number;
}
