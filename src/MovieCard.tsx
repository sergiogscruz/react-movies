import React from "react";

interface IMovie {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

interface IProps {
  movie: IMovie
}

const MovieCard: React.FC<IProps> = ({ movie }) => {
  return (
    <>
      <div className='movie'>
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img src={movie.Poster !== "N/A" ? movie.Poster : 'http://via.placeholder.com/400'} alt={movie.Title} />
        </div>
        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </>
  );
}

export default MovieCard;