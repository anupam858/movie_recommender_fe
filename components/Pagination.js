import ReactPaginate from 'react-paginate';
import styles from '../styles/Pagination.module.css'

export default function Pagination({pageCount, currPage, setCurrPage}){

    function handlePageClick(e){
        setCurrPage(e.selected);
    
    }

    return (
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(event) => handlePageClick(event)}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        containerClassName={styles.pagination}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        activeClassName={styles.active}
      />
    )

}