import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ɵDomSharedStylesHost } from '@angular/platform-browser';
import { Book } from './book/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  @Output() addCarBook: EventEmitter<Book>;
  books: Book[] = [];

  constructor() {
    this.addCarBook = new EventEmitter();
  }

  ngOnInit(): void {
    this.books = this.getBooks();
  }

  getBooks(): Book[] {
    return [
      {
        id: 1,
        title: 'The Pragmatic Programmer',
        author: 'David Thomas & Andrew Hunt',
        coverUrl: 'https://uploads-ssl.webflow.com/5f280c5b57d2edfcbbb057ea/5f2960f40b95b440c7d4a732_1.jpg'
      },
      {
        id: 2,
        title: 'Clean Code',
        author: 'Robert C. Martin (uncle bob)',
        coverUrl: 'https://uploads-ssl.webflow.com/5f280c5b57d2edfcbbb057ea/5f29609c7a11aa6a428083c3_2.jpg'
      },
      {
        id: 3,
        title: 'Code Complete',
        author: 'Steve McConnell',
        coverUrl: 'https://uploads-ssl.webflow.com/5f280c5b57d2edfcbbb057ea/5f29606f8540b0caf0950f9f_3.jpg'
      },
      {
        id: 4,
        title: 'Refactoring',
        author: 'Martin Fowler',
        coverUrl: 'https://uploads-ssl.webflow.com/5f280c5b57d2edfcbbb057ea/5f29603e1d61e17793bd5eac_4.jpg'
      },
      {
        id: 5,
        title: 'Head First Design Patterns',
        author: 'Eric Freeman & Bert Bates & Kathy Sierra & Elisabeth Robson',
        coverUrl: 'https://uploads-ssl.webflow.com/5f280c5b57d2edfcbbb057ea/5f295ff6690b14114addeff7_5.jpg'
      },
      {
        id: 6,
        title: 'The Mythical Man-Month',
        author: 'Frederick P. Brooks Jr',
        coverUrl: 'https://uploads-ssl.webflow.com/5f280c5b57d2edfcbbb057ea/5f295fc0407ae2a76fdc6219_6.jpg'
      }
    ];
  }

  addBook(book: Book): void {
    this.addCarBook.emit(book);
  }

}
