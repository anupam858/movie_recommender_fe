import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';
import styles from '../styles/Filter.module.css';

export default function Filter({filter, setFilter}){

    const [time, setTime]=useState(100);

    function handleSortSelect(e){
        let sortby = '';
        let sortDirection= 0;
        if(e.target.value==0){
            sortby = 'startYear';
            sortDirection = -1;
        }
        else if(e.target.value==1){
            sortby = 'startYear';
            sortDirection = 1;
        }
        else if(e.target.value==2){
            sortby = 'runtimeMinutes';
            sortDirection = -1;
        }
        else if(e.target.value==3){
            sortby = 'runtimeMinutes';
            sortDirection = 1;
        }
        setFilter({
            ...filter,
            sortColumn: sortby,
            sortDir: sortDirection
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
    function dragHandler(e){
        setTime(e.target.value);
    }
    function onRangeSet(){
        setFilter(
            {
                ...filter,
                runtime: time
            }
        )
    }

    const options = ["Action", "Adventure","Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy"
                    , "Film Noir", "History", "Horror", "Music", "Musical", "Mystery", "Romance", "Sci-Fi", "Short Film", "Sport"
                    , "Superhero", "Thriller", "War", "Western"]

    return (
        <div className={styles.filter} >
            <div className={styles.genre}>
                <Multiselect
                    options={options}
                    isObject={false} 
                    onSelect={onSelectGenres} 
                    onRemove={onRemoveGenres} 
                    displayValue="Genres"
                    placeholder='Select Genres'
                    className={styles.multiselect} 
                    />
            </div>
            <div className={styles.range}>
                <label htmlFor="runtime">Runtime (mins)</label>
                <input type="range" id="runtime" name="runtime" min="0" max="999" defaultValue="100"
                onChange={(e)=>dragHandler(e)}
                onLostPointerCapture={()=> onRangeSet()}
                onTouchEnd={()=> onRangeSet()}></input>
                <span>{time}</span>
            </div>
            <div className={styles.sort}>
                <label htmlFor="sort">Sort </label>
                <select name="sort" id="sort" onChange={(e)=> handleSortSelect(e)}>
                    <option value="0">Newest First</option>
                    <option value="1">Oldest First</option>
                    <option value="2">Longest Runtime First</option>
                    <option value="3">Shortest Runtime First</option>
                </select>
            </div>
        </div>
    );
}