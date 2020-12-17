import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent as BooksPageComponent } from './pages/books/books.component';
import { BookComponent as BookPageComponent } from './pages/book/book.component';


@NgModule({
  declarations: [
    BooksPageComponent,
    BookPageComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
