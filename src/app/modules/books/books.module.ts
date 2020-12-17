import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent as BooksPageComponent } from './pages/books/books.component';
import { BookComponent as BookPageComponent } from './pages/book/book.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/books/book/book.component';

@NgModule({
  declarations: [
    BooksPageComponent,
    BookPageComponent,
    BooksComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
