export interface ResponseMovieList {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}



export interface Result {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage | string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = "en",
  Fr = "fr",
  Ja = "ja",
  Uk = "uk",
}



/*resultado de : https://api.themoviedb.org/3/movie/latest */
export interface ResponseLatestMovie {
  adult: boolean;
  backdrop_path: null;
  belongs_to_collection: null;
  budget: number;
  genres: any[];
  homepage: string;
  id: number;
  imdb_id: null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: any[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


export type typeMovieList = 'now_playing' | 'top_rated' | 'popular' | 'upcoming'

export interface MoviListProps {
  type: typeMovieList,
  language?: 'es-ES'|'en-En'|'ja-Ja'|'de-DE',
  page?: string,
}