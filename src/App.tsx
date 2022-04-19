import { useEffect, useState } from 'react';

import './App.css';
import Logo from "./search.svg";

import MovieCard from './MovieCard';

const API_URL = `http://www.omdbapi.com?apikey=691b69b2`

interface IMovie {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

const App = () => {
  const [movies, setMovies] = useState<Array<IMovie>>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const searchMovies = async (title: string) : Promise<any> => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    
  }, []);

  return (
    <div className='app'>
      <h1>React Movie</h1>
      <div className='search'>
        <input 
          placeholder='Busque por um filme'
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) } } 
          />
        <img 
          src={Logo} 
          alt="Search" 
          onClick={() => { searchMovies(searchTerm) }}/>
      </div>

      { movies?.length > 0
        ? (
            <div className='container'>
              { movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
            </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )}
    </div>
  );
}

export default App;

