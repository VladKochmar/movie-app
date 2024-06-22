import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from '../../../assets/data/mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  movies = [
    ...popularMovies,
    ...nowPlayingMovies,
    ...upcomingMovies,
    ...topRatedMovies,
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');

    if (movieId)
      this.movie = this.movies.find(
        (currentMovie) => currentMovie.id === parseInt(movieId)
      );
  }
}
