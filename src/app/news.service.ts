import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;
const params = new HttpParams().set('apikey', API_KEY);
@Injectable({
  providedIn: 'root'
})

export class NewsService {
  currentArticle: any;
  constructor(private http: HttpClient) { }

  getData(url) {
      return this.http.get(`${API_URL}/${url}`, { params }).pipe(
        tap(value => {
          console.log(value);
        })
      );
  }
}
