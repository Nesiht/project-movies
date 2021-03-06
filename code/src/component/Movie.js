import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import 'component/movie.css'

export const Movie = () => {
  const [movie, setMovie] = useState()
  const { id } = useParams()
  
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=5f9ddb234f53171b24352c9e5988b098&language=en-US`

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => setMovie(json))
      .then(console.log(URL))
      .catch((error) => console.log(error))
  }, [URL]);

  if (!movie) {
    return <></>;
}

  return (
    <article className="movieDetail" style={{backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0, 0, 0, 1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}>
      <img className="movieImage" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />

      <div className="movieDescription">
        <h1>{movie.original_title} 
          <span className="movieVote">{movie.vote_average} / 10</span>
        </h1>
        <p>{movie.overview}</p>
      </div>
    </article>
  )
}