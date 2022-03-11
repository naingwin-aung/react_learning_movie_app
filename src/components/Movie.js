import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import CastList from "./CastList";
import './Movie.css'

function Movie() {
    const {id} = useParams();
    const [movie, setMovie] = useState({});

    const getDetail = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=00a5aaf9c112ac4746166a4930323be3`;

        try { 
            const res = await fetch(url);
            const data = await res.json();

            console.log(data);
            setMovie(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getDetail()
    }, [])

    return ( 
        <div className="movie">
            <div className="bg">
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.backdrop_path}`} alt={movie.original_title}/>
            </div>

            <Link to={'/'}>Home</Link>
            <div className="movie_content">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.original_title}/>
                </div>
                <h3 className="movie_name">
                    {movie.original_title}
                </h3>
                <div>
                    {movie.overview}
                </div>
                
                <div className="carts">
                    <CastList movieId={id}></CastList>
                </div>
            </div>
        </div>
    )
}

export default Movie;