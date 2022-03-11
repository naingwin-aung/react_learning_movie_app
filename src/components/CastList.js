import React, {useState, useEffect} from 'react'
import "./CastList.css"
import Cast from './Cast'

function CastList({movieId}) {
    const [casts, setCasts] = useState([]); 

    const getCast = async () => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=00a5aaf9c112ac4746166a4930323be3`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setCasts(data.cast);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCast();
    }, [])

    return (
        <div>
            <h3>Casts</h3>
            <ul className='cast_list hor-list'>
                {
                    casts.map((cast, i) => (
                        <li key={i}>
                            <Cast cast={cast}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )   
}

export default CastList;