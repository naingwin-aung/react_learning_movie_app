import React from 'react'
import './Poster.css'
import { Link } from 'react-router-dom'

function Poster({movie}) {
    return (
        <div className='poster'>
            <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />
                <div>
                    {movie.original_title}
                </div>
            </Link>
        </div>
    )
}

export default Poster;