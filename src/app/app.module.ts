import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookComponent } from './books/book/book.component';
import { ExampleComponent } from './example/example.component';
import { BooksComponent } from './books/books.component';
import { CarComponent } from './car/car.component';
import { TotalCarComponent } from './car/total-car/total-car.component';
import { DetailCarComponent } from './car/detail-car/detail-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BookComponent,
    ExampleComponent,
    BooksComponent,
    CarComponent,
    TotalCarComponent,
    DetailCarComponent
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
