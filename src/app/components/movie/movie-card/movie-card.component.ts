import { Component, OnInit, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MovieService } from '../../../services/movie/movie.service';
import { Movie } from '../../../interfaces/movie.interface';
import { MatIconModule } from '@angular/material/icon';
import { MovieGenreComponent } from '../movie-genre/movie-genre.component';



@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MovieGenreComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit {

  movies = signal<Movie[]>([]);

  constructor(
    private movieService: MovieService) {}

ngOnInit(): void {
  this.movieService.getMovies().subscribe({
    next: (movies) => {
      console.log(movies)
      this.movies.set(movies);
    },
    error: (error) => {
      this.movies.set([]);
      console.error(error);
    },
  });
}
}
