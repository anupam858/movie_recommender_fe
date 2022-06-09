import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useState, useEffect} from 'react';
import Filter from '../components/Filter';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';


export default function Home() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(0)
  const [filter, setFilter] = useState({})
  useEffect(
    () =>{
      setIsLoading(true)
      console.log(process.env.API_URL)
      axios.get(process.env.NEXT_PUBLIC_API_URL+String(page),{params:filter, withCredentials:false}).then(
        function (res) {
          setMovies(res.data.movies);
          setCount(res.data.count)
          setIsLoading(false);
        }
        ).catch(function (error){
          console.log(error.code)
        }
        );

    }
  ,[page, filter]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Recommender</title>
        <meta name="description" content="A movie recommender website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Filter movies={movies} filter = {filter} setFilter={setFilter} />
        {
        !isLoading?(<MovieList movies={movies}/>):(<p>Loading</p>)
        }
        <Pagination pageCount={count} currPage= {page} setCurrPage={setPage}/>
      </main>
      
    </div>
  )
}
