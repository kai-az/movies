import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  actionAuth } from '../../store/actions'
import './FilmList.css'
import FilmCard from '../FilmCard/FilmCard';

import { API } from '../../consts';
import Pagination from '../Pagination/Pagination';



function FilmList() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filmsPerPage] = useState<number>(10)

  const [pageNumberLimit, setpageNumberLimit] = useState<number>(10)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(10)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0)

  const lastFilmIndex:number = currentPage * filmsPerPage;
  const firstFilmIndex: number = lastFilmIndex - filmsPerPage;

  const filmsList = useSelector(state => state.filmFilterReducer.filmList)

  const isAuthState = useSelector(state => state.authReducer.isAuth)
  const isAuth = localStorage.getItem('isAuth') || isAuthState


  useEffect(() => {

}, [isAuth])


  const currentFilms = filmsList.slice(firstFilmIndex, lastFilmIndex)



  const filmCards: Array<React.ReactNode> = currentFilms.map((item) => {
    return (
       <FilmCard
        item={item}
        isAuth={isAuth}
        key={item.id}
        />
    )
  })

  const paginate = (e: React.MouseEvent<HTMLAnchorElement>, pageNumber: number): void => {
    e.preventDefault()
    setCurrentPage(pageNumber)
  }

  const handlePrevPage = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
     setCurrentPage(currentPage - 1)
    if ((currentPage-1) % pageNumberLimit === 0  ) {
      setMaxPageNumberLimit(  maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit (minPageNumberLimit - pageNumberLimit)
    }
  }

   const handleNextPage = (e: React.MouseEvent<HTMLButtonElement>): void => {
     e.preventDefault()
    setCurrentPage(currentPage + 1)
     if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(  maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit (minPageNumberLimit + pageNumberLimit)
    }
  }


  return (
    <div className='film--block'>
      <ul className="film--list">
        {filmCards}
      </ul>
      <Pagination
          filmsPerPage={filmsPerPage}
          totalFilms={filmsList.length}
          currentPage={currentPage}
          maxPageNumberLimit={maxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
          paginate={(e, pageNumber) => paginate(e, pageNumber)}
          handleNextPage={(e) => handleNextPage(e)}
          handlePrevPage={(e) => handlePrevPage(e)}
        />
    </div>
  )
}

export default FilmList
