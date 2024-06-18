import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MoviesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  movies = [
    {
      id: 1,
      title: 'Bohemian Rhapsody',
      time: '134',
      director: 'Bryan Singer',
      description:
        'Bohemian Rhapsody is a 2018 biographical musical drama film that focuses on the life of Freddie Mercury, the lead singer of the British rock band Queen, from the formation of the band in 1970 to their 1985 Live Aid performance at the original Wembley Stadium.',
      poster:
        'https://m.media-amazon.com/images/I/61dk4SHy1CL._UF894,1000_QL80_.jpg',
      isFavorite: false,
      isWatchLater: false,
    },
    {
      id: 2,
      title: 'Beetlejuice',
      time: '92',
      director: 'Tim Burton',
      description:
        'Beetlejuice is a 1988 American fantasy horror comedy film directed by Tim Burton from a screenplay by Michael McDowell and Warren Skaaren based on a story by McDowell and Larry Wilson.',
      poster:
        'https://m.media-amazon.com/images/S/pv-target-images/73f72124123a65f86205b1893fa0d699e3658adb2ca71659d2b08ae0b64c61c8.jpg',
      isFavorite: false,
      isWatchLater: false,
    },
    {
      id: 3,
      title: 'Forrest Gump',
      time: '142',
      director: 'Robert Zemeckis',
      description:
        "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
      poster:
        'https://m.media-amazon.com/images/S/pv-target-images/2d0c9e38968936e6711c7fb2bc7895b82d8bb9178b5a854e14dffa4b17b88487.jpg',
      isFavorite: false,
      isWatchLater: false,
    },
    {
      id: 4,
      title: 'Shutter Island',
      time: '138',
      director: 'Martin Scorsese',
      description:
        'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.',
      poster:
        'https://m.media-amazon.com/images/I/71UewhmxlvL._AC_UF894,1000_QL80_.jpg',
      isFavorite: false,
      isWatchLater: false,
    },
    {
      id: 5,
      title: 'Pirates of the Caribbean',
      time: '143',
      director: 'Gore Verbinski',
      description:
        "Pirates of the Caribbean is an American fantasy supernatural swashbuckler film series produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name.",
      isFavorite: false,
      isWatchLater: false,
    },
  ];
}
