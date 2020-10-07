import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.interface';

import { MOVIES } from './movie-mock';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies = MOVIES;

  constructor() { }

  ngOnInit(): void {
  }

}