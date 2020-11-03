import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  _baseUrl: string = "api/books";

  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<Book[]>(this._baseUrl);
  }
}
