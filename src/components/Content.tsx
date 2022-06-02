import { useEffect, useState } from "react";
import { api } from "../services/api";
import { GenreResponseProps } from "../types/GenreResponseProps";
import { MovieProps } from "../types/MovieProps";
import { MovieCard } from "./MovieCard";

type Props = {
  selectedGenreId: number;
  selectedGenre: GenreResponseProps;
  setSelectedGenre: Function;
}

export const Content: React.FC<Props> = ({ selectedGenreId, selectedGenre, setSelectedGenre }) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}