import React from 'react'

function Cast({cast}) {
    return (
        <div>
            { cast.profile_path &&
                <div>
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${cast.profile_path}`} alt={cast.name} />
                    <div>
                        {cast.name}
                    </div>
                </div>
            }
        </div>
    );
}

export default Cast;