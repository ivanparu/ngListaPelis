import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private dataMoviesUrl = 'assets/data/movies.json';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.dataMoviesUrl);
  }

}
