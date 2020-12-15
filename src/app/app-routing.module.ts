import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './pages/example/example.component';
import { HomeComponent } from './home/pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { BookComponent } from './pages/books/book/book.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'books/:id',
        component: BookComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'example',
        component: ExampleComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
