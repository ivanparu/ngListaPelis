import { Component} from '@angular/core';
import { MovieCardComponent } from './movie-card/movie-card.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [ MovieCardComponent],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  
}