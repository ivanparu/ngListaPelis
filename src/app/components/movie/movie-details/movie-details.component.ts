import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../services/movie/movie.service';
import { Movie } from '../../../interfaces/movie.interface';
import {MatCardModule} from '@angular/material/card';
import { MovieGenreComponent } from '../movie-genre/movie-genre.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [MatCardModule, MovieGenreComponent, MatIconModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit{
  id: string = " ";
  movie!: Movie;
  private movieService: MovieService = inject(MovieService);
  constructor(private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id){
      this.router.navigate(['/movies']);
    } else{
      this.id = id;
      this.buscarMovie();
    }
  }

  buscarMovie(): void {
    this.movieService.getMovie(this.id).subscribe({
      next: (movie) => {
        console.log(movie);
        console.log('hol');
        this.movie = this.movie;
      },
      error: (error) => {
        console.error(error);
        this.router.navigate(['/movies']);
      },
    });
  }

}


