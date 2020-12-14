import { Component } from '@angular/core';
import { Book } from './books/book/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemBook: Book;

  addItemBookCar(book: Book): void {
    this.itemBook = book;
  }
}
