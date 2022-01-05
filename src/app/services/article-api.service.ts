import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from '../models/articel.intarface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleApiService {
  constructor(private http: HttpClient) {}

  getAllArticles() {
    const url: string = 'http://localhost:3000/articels';
    return this.http.get(url);
  }

  createArticles(data: any) {
    const url: string = 'http://localhost:3000/articels';
    return this.http.post(url, data);
  }
}
