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

  addBook(book: Book) {
    return this.http.post(this._baseUrl, book);
  }

  getBookById(id: number) {
    return this.http.get(this._baseUrl + "/" + id);
  }

  updateBook(book: Book) {
    return this.http.put(this._baseUrl+ "/" + book.id, book);
  }

  deleteBook(id: number) {
    return this.http.delete(this._baseUrl + "/" + id);
  }
}
