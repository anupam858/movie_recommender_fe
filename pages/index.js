import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useState, useEffect} from 'react';
import Filter from '../components/Filter';
import MovieList from '../components/MovieList';

export default function Home() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(
    () =>{
      axios.get("http://127.0.0.1:5000/",{withCredentials:false}).then(
        function (res) {
          console.log(res.data)
          setMovies(res.data.movies);
          setIsLoading(false);
        }
        ).catch(function (error){
          console.log(error.code)
        }
        );

    }
  ,[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Recommender</title>
        <meta name="description" content="A movie recommender website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Filter movies={movies} setMovies={setMovies} />
        {
        !isLoading?(<MovieList movies={movies}/>):(<p>Loading</p>)
        }
      </main>

    </div>
  )
}
