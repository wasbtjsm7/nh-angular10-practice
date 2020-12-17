import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { BookComponent } from './pages/book/book.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: ':id',
    component: BookComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
