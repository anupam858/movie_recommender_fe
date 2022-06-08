import styles from '../styles/MovieList.module.css'

export default function MovieList({movies}){

    return (
        <div className={styles.movielist}>
            {
            movies.map((movie) => {
                return (
                <div key = {movie.tconst} className={styles.movie}>
                        <h2>{movie.primaryTitle}</h2>
                        <h3> &nbsp;{`(${movie.startYear})`}</h3>
                        <p className={styles.details}>{`${movie.runtimeMinutes} mins - ${movie.genres}`}</p>
                </div>
                )           
            })
        }
        </div>
    )
}