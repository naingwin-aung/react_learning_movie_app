import React, {useState, useEffect} from "react";
import Poster from "./Poster";
import './MovieList.css'

let API_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=00a5aaf9c112ac4746166a4930323be3';

function MovieList({type}) {
    let title = type == 1 ? 'Popular' : 'Upcoming'; 
    const [movies, setMovie] = useState([]);

    const getList = async () => {
        if(type == 1) {
            API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=00a5aaf9c112ac4746166a4930323be3';
        }
        try { 
        const res = await fetch(API_URL);
        const data = await res.json();

        setMovie(data.results);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getList()
    }, [])
    return (
        <div className="movieList">
            <h1 className="subtitle">{title}</h1>
            <ul className="hor-list">
                {
                    movies.map((movie, i) => (
                            <li key={i}>
                                <Poster movie={movie}/>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default MovieList;