import { Component, Input } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-movie-genre',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './movie-genre.component.html',
  styleUrl: './movie-genre.component.scss'
})
export class MovieGenreComponent {
  @Input()
  genres: string[] = [];
}
