import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookComponent as BookDetailComponent } from './books/book/book.component';
import { ExampleComponent } from './pages/example/example.component';
import { BooksComponent as BooksListComponent} from './books/books.component';
import { CarComponent } from './car/car.component';
import { TotalCarComponent } from './car/total-car/total-car.component';
import { DetailCarComponent } from './car/detail-car/detail-car.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BooksComponent } from './pages/books/books.component';
import { BookComponent } from './pages/books/book/book.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LayoutComponent } from './pages/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BookDetailComponent,
    ExampleComponent,
    BooksListComponent,
    CarComponent,
    TotalCarComponent,
    DetailCarComponent,
    CategoriesComponent,
    ContactComponent,
    BooksComponent,
    NotFoundComponent,
    BookComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
