import './Home.css'
import MovieList from './components/MovieList'

function Home() {
    return (
        <div>
            <h1 className='title'>Movies</h1>
            <MovieList />
            <MovieList type={1}/>
        </div>
    )
}

export default Home;