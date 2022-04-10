import { useEffect } from 'react';
import './App.css';
import Logo from "./search.svg";
const API_URL = `http://www.omdbapi.com?apikey=691b69b2`

const App = () => {
  const searchMovies = async (title: string) : Promise<any> => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log('data',data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>React Movie</h1>
      <div className='search'>
        <input 
          placeholder='Busque por um filme'
          value="Superman"
          onChange={() => {}} 
          />
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default App;

