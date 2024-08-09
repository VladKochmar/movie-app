import { Genre } from './genre.model';
import { ProductionCompany } from './production-company.model';
import { ProductionCountry } from './production-country.model';
import { SpokenLanguage } from './spoken-language.model';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genre_ids?: number[];
  budget?: number;
  genres?: Genre[];
  revenue?: number;
  homepage?: string;
  imdb_id?: string;
  runtime?: number;
  origin_country?: string[];
  status?: string;
  tagline?: string;
  spoken_languages?: SpokenLanguage[];
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
}
