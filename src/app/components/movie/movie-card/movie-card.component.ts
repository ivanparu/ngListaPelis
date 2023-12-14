import { Component, OnInit, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MovieService } from '../../../services/movie/movie.service';
import { Movie } from '../../../interfaces/movie.interface';
import { MatIconModule } from '@angular/material/icon';
import { MovieGenreComponent } from '../movie-genre/movie-genre.component';
import { Router } from '@angular/router';



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
    private movieService: MovieService, 
    private router: Router) {}

ngOnInit(): void {
  this.movieService.getMovies().subscribe({
    next: (movies) => {
      this.movies.set(movies);
    },
    error: (error) => {
      this.movies.set([]);
      console.error(error);
    },
  });
}
  redirectDetail(id: number){
  this.router.navigate(['/details', id]);
}

}
