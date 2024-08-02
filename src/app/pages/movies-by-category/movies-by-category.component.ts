import { Component, OnInit } from '@angular/core';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import type { Movie } from '../../models/movie.model';
import { Store } from '@ngrx/store';
import { selectMovies } from '../../store/selectors';
import { map, takeUntil } from 'rxjs';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-by-category',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './movies-by-category.component.html',
  styleUrl: './movies-by-category.component.scss',
})
export class MoviesByCategoryComponent
  extends ClearObservable
  implements OnInit
{
  title: string | null = null;
  movies: Movie[] | null = [];
  selectedMovies$ = this.store.select(selectMovies);

  constructor(private store: Store, private route: ActivatedRoute) {
    super();
  }

  getTitleByCategory(category: string | null) {
    let result: string | null = null;

    switch (category) {
      case 'top_rated':
        result = 'Top Rated';
        break;
      case 'popular':
        result = 'Popular';
        break;
      case 'upcoming':
        result = 'Upcoming';
        break;
      case 'now_playing':
        result = 'Now Playing';
        break;
      default:
        console.error('Something went wrong');
        break;
    }

    return result;
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$),
        map((params) => params.get('category'))
      )
      .subscribe((category) => {
        this.title = this.getTitleByCategory(category);
      });

    this.selectedMovies$
      .pipe(takeUntil(this.destroy$))
      .subscribe((moviesList) => {
        this.movies = moviesList;
      });
  }
}
