export interface RecomendacionesRespuesta {
  results:       Recomendaciones[];
}

export interface Recomendaciones {
  adult:             boolean;
  backdrop_path:     null | string;
  id:                number;
  title:             string;
  original_language: string;
  original_title:    string;
  overview:          string;
  poster_path:       null | string;
  media_type:        MediaType;
  genre_ids:         number[];
  popularity:        number;
  release_date:      string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export enum MediaType {
  Movie = "movie",
}