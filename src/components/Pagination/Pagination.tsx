import React from 'react'
import './Pagination.css'

type PaginationProps = {
    filmsPerPage: number,
    totalFilms: number,
    currentPage: number,
    maxPageNumberLimit: number,
    minPageNumberLimit: number,
    paginate: (e: React.MouseEvent<HTMLAnchorElement>, page: number) => void,
    handleNextPage: (e: React.MouseEvent<HTMLButtonElement>) => void,
    handlePrevPage: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const Pagination: React.FC<PaginationProps> = ({
    filmsPerPage,
    totalFilms,
    currentPage,
    paginate,
    maxPageNumberLimit,
    minPageNumberLimit,
    handleNextPage,
    handlePrevPage
}) => {

    const pageNumbers: Array<number> = [];
    for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
        pageNumbers.push(i)
    }

    const renderPageNumber: Array<React.ReactNode> | null  =  pageNumbers.map((page, key) => {
            if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
                return (
                    <li className='pagination--page' key={key}>
                        <a href="!#" className={currentPage === page ? 'page--link page-active' : 'page--link'} onClick={(e) => paginate(e, page)}>
                            {page}
                        </a>
                    </li>
                )
            } else {
                return null
            }
         })


  return (
    <div className='pagination'>
          <ul className='pages--list'>
              <li className='pagination--page prev--page'>
                  <button
                      className='page--btn'
                      onClick={handlePrevPage}
                      disabled={currentPage === pageNumbers[0]}>
                      Prev
                  </button>
              </li>
              {renderPageNumber}
              <li className='pagination--page next--page'>
                  <button
                      className='page--btn'
                      onClick={handleNextPage}
                      disabled={currentPage === pageNumbers[pageNumbers.length - 1]}>
                      Next
                  </button></li>
        </ul>
    </div>
  )
}

export default Pagination
