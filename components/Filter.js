import Multiselect from 'multiselect-react-dropdown';
import styles from '../styles/Filter.module.css';

export default function Filter({filter, setFilter}){

    function handleSortSelect(e){
        setFilter({
            ...filter,
            sort: e.target.value
        })
        
    }

    function onSelectGenres(selectedList, selectedItem){
        setFilter({
            ...filter,
            genre: selectedList.sort().join()
        })
    }
    function onRemoveGenres(selectedList, removedItem){
        setFilter({
            ...filter,
            genre: selectedList.sort().join()
        })
    }

    const options = ["Action", "Adventure","Animation", "Biography", "Comedy"< "Crime", "Documentary", "Drama", "Family", "Fantasy"
                    , "Film Noir", "History", "Horror", "Music", "Musical", "Mystery", "Romance", "Sci-Fi", "Short Film", "Sport"
                    , "Superhero", "Thriller", "War", "Western"]

    return (
        <div className={styles.filter} >
            <div className={styles.genre}>
                <label htmlFor="genre">Genre</label>
                <Multiselect
                    options={options}
                    isObject={false} 
                    onSelect={onSelectGenres} 
                    onRemove={onRemoveGenres} 
                    displayValue="Genres"
                    placeholder='Select Genres' 
                    />
            </div>
            <div className={styles.sort}>
                <label htmlFor="sort">Sort </label>
                <select name="sort" id="sort" onChange={(e)=> handleSortSelect(e)}>
                    <option value="-1">Newest First</option>
                    <option value="1">Oldest First</option>
                </select>
            </div>
        </div>
    );
}