import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../books/book/book';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input() itemBook: Book;
  booksCounter = 0;
  selectedBooks = [];

  constructor() { }

  ngOnInit(): void {
    let item = this.findItemBook(this.itemBook);
    this.addDetailCar(item, this.itemBook);
    this.addTotalCar();
  }

  findItemBook(book: Book): any {
    return this.selectedBooks.find(item => item.book.id === book.id);
  }

  addDetailCar(item: any, book:Book): void {
    if (item) {
      item.count += 1;
    }else {
      this.selectedBooks.push({
        book: book,
        count: 1
      });
    }
  }

  addTotalCar(): void {
    this.booksCounter += 1;
  }

}
