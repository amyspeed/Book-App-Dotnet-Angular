import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { ShowBookComponent } from './components/show-book/show-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BookService } from './services/book.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';

// import { StoreModule } from '@ngrx/store';
// import { BookReducer } from './store/book.reducer';
// import { EffectsModule } from '@ngrx/effects';
// import { BookEffects } from 'src/app/store/book.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BooksComponent,
    DeleteBookComponent,
    NewBookComponent,
    ShowBookComponent,
    UpdateBookComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'books', component: BooksComponent },
      { path: 'new-book', component: NewBookComponent },
      { path: 'update-book/:id', component: UpdateBookComponent },
      { path: 'delete-book/:id', component: DeleteBookComponent },
      { path: 'show-book/:id', component: ShowBookComponent },
    ]),
    // StoreModule.forRoot({applicationState: BookReducer}),
    // EffectsModule.forRoot([BookEffects]),
  ],
  providers: [BookService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
