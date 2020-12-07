import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnChanges, OnInit, OnDestroy {
  @Input() book;
  @Input() coverWith: number;

  constructor() {
    console.log(`life cycle Angular: contructor`);
    this.coverWith = 200;
    console.log(`contructor coverWith: ${this.coverWith}`);
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
}
