import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnChanges, OnInit, OnDestroy {
  @Input() book: Book;
  @Input() coverWith: number;
  @Output() clickBook: EventEmitter<Book>;

  constructor() {
    console.log(`life cycle Angular: contructor`);
    this.coverWith = 200;
    console.log(`contructor coverWith: ${this.coverWith}`);
    this.clickBook = new EventEmitter();
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log(`life cycle Angular: ngOnChanges ${change}`);
  }

  ngOnInit(): void {
    console.log(`life cycle Angular: ngOnInit`);
    console.log(`ngOnInit coverWith: ${this.coverWith}`);
  }

  ngOnDestroy(): void {
    console.log(`life cycle Angular: ngOnDestroy`);
  }

  chooseBook(): void {
    console.log(
      `se esta reservado el libro ${this.book.title}`
    );
    this.clickBook.emit(this.book);
  }
}
