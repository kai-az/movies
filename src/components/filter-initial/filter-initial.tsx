import React from 'react'
import { useSelector } from 'react-redux'
import './filter-initial.css'
import { actionInitialFilters, actionCheckboxToggle } from '../../store/actions'
import { checkBox } from '../GenresFilter/consts'

export const FilterInitial = ({setCurrentFilter}) => {
    const initialFilmList = useSelector(state => state.filmFilterReducer.initialList)

    const handleClick = () => {
        actionInitialFilters(initialFilmList)
        actionCheckboxToggle(checkBox)
        setCurrentFilter(null)
    }

  return (
      <button
          className='filter--initial'
          onClick={handleClick}
      >
          Сбросить фильтры
      </button>
  )
}
