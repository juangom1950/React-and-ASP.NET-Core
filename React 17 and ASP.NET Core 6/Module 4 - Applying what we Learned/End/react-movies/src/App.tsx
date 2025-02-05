import './App.css';
import MoviesList from './movies/MoviesList'
import { landingPageDTO } from './movies/movies.model';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    // Delay simulating a database connecton.
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'Spider-Man: Far From Home',
            poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
          },
          {
            id: 2,
            title: 'Luca',
            poster: 'https://i0.wp.com/www.hd.com.do/wp-content/uploads/2021/04/1619620464_LUCA-Disney.png?fit=525%2C750&ssl=1'
          }
        ],
        upcomingReleases: [
          {
            id: 3,
            title: 'Soul',
            poster: 'https://i.pinimg.com/originals/9d/6a/04/9d6a0489776b1abde5f7f1b474a8b6c4.png'
          }
        ]
      })
      // It will be executed after 1 min
    }, 1000);

    // Here we are claning the resources
    return () => clearTimeout(timerId);
  });

  return (
    // container is a bootstrap class
    <div className="container">
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />
    </div>
  )
}

export default App;
