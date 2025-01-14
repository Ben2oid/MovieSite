export interface ListItemProps {
  movieData: {
    poster_path: string;
    title: string;
    release_date: string;
    vote_average: number;
  };
}

export interface MovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
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
}

export interface MovieDataResponse {
  page: number;
  results: [MovieData];
  total_pages: number;
  total_results: number;
}
