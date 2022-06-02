import { useEffect, useState } from "react";
import { api } from "../services/api";
import { GenreResponseProps } from "../types/GenreResponseProps";
import { Button } from "./Button";

type Props = {
  setSelectedGenreId: Function;
  selectedGenreId: number;
}

export const SideBar: React.FC<Props> = ({ setSelectedGenreId, selectedGenreId }) =>  {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => setSelectedGenreId(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}