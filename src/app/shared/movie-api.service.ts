import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private BaseApiUrl = 'http://api.themoviedb.org/3/';
    private API_key = '565215996a6ac0262dff41c2aa00e7e1';
    private topRate = 'movie/top_rated?query=';
    private upCome = 'movie/upcoming?query=';
    private key = `&api_key=${this.API_key}`;
  constructor(private http: HttpClient) { }
  getTopRatedMovies() {
    let searchQuery = this.BaseApiUrl + this.topRate + this.key;
    return this.http.get(searchQuery);
}
getUpcimmingMovies() {
  let searchQuery = this.BaseApiUrl + this.upCome + this.key;
  return this.http.get(searchQuery);
}
}
