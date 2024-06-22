import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() favoritesIds: string[] = [];
  @Input() watchLaterIds: string[] = [];

  constructor(private router: Router) {}

  navigateWithData(data: string[], isFavorite?: string) {
    const dataString = JSON.stringify(data);
    const path = isFavorite ? 'favorites' : 'watch-later';

    this.router.navigate([{ outlets: { header: [path] } }], {
      queryParams: { data: dataString },
    });
  }
}
