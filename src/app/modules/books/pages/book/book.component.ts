import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  id: number;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = this.getBookId(params);
    });

    this.route.queryParams.subscribe((params: Params) => {
      console.log(params);
    });
  }

  getBookId(params: Params): number {
    return params.id;
  }

}
