import { useState } from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { GenreResponseProps } from './types/GenreResponseProps';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId}/>
      <Content selectedGenreId={selectedGenreId} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
    </div>
  )
}