import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { MovieSearchComponent } from '../movie-search/movie-search.component';

@Component({
  selector: 'app-menu-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    SidebarModule,
    ButtonModule,
    MenuModule,
    MovieSearchComponent,
  ],
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.scss',
})
export class MenuSidebarComponent implements OnInit {
  sidebarVisible: boolean = false;

  items: MenuItem[] | undefined;

  constructor() {}

  closeSidebar(value: boolean) {
    this.sidebarVisible = value;
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Navigation',
        items: [
          {
            label: 'Top Rated',
            icon: 'pi pi-star',
            route: 'movies/top_rated',
          },
          {
            label: 'Popular',
            icon: 'pi pi-trophy',
            route: 'movies/popular',
          },
          {
            label: 'Now Playing',
            icon: 'pi pi-play-circle',
            route: 'movies/now_playing',
          },
          {
            label: 'Upcoming',
            icon: 'pi pi-sparkles',
            route: 'movies/upcoming',
          },
        ],
      },
    ];
  }
}
