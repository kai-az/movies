import { useState, useEffect } from 'react'
import {  useSelector } from 'react-redux';
import './FilterSelect.css'

import {
    POPULAR_INCREASE,
    POPULAR_DECREASE,
    RAITING_INCREASE,
    RAITING_DECREASE,
    POPULAR,
    YEAR,
    WATCH_LATER,
    FAVOURITES,
    USER_COLLECTION
} from "../../consts"


import { actionPopularity, actionYear, actionUserCollection } from '../../store/actions';


function FilterSelect({ options, sortBy, defaultSelect, headerText, currentFilter,  setCurrentFilter}) {



  const [isActive, setIsActive] = useState(false)
  const [currentOption, setCurrentOption] = useState(null)


  const filmsList = useSelector(state => state.filmFilterReducer.filmList)
  const initialFilmList = useSelector(state => state.filmFilterReducer.initialList)
  const watchLaterList = useSelector(state => state.userCollection.userWatchLater)
  const userFavouritesList = useSelector(state => state.userCollection.userFavourites)

  useEffect(() => {
    if (currentFilter === WATCH_LATER || currentFilter === FAVOURITES) {
       actionUserCollection(sortByUserCollection(currentFilter));
    }

  }, [watchLaterList, userFavouritesList])

  console.log('FILMLIST', filmsList);
    console.log('initialFilmList', initialFilmList);



   const sortByPopularity = (filter, films) => {
     switch (filter) {
       case POPULAR_INCREASE:
         return [...films].sort((a, b) => a.popularity - b.popularity)
       case POPULAR_DECREASE:
         return [...films].sort((a, b) => b.popularity - a.popularity)
       case RAITING_INCREASE:
         return [...films].sort((a, b) => a.vote_average - b.vote_average)
       case RAITING_DECREASE:
         return [...films].sort((a, b) => b.vote_average - a.vote_average)
    }
  }

  const sortByYear = (filter, films) => {
    let result = films.filter(item => {
      if (!item.release_date.indexOf(filter)) {
        return item
      }
    })
    return result
  }

  const sortByUserCollection = (filter) => {
    switch (filter) {
      case WATCH_LATER:
        return initialFilmList.filter(item => watchLaterList.includes(item.id));

      case FAVOURITES:
         return initialFilmList.filter(item => userFavouritesList.includes(item.id));
    }
  }


  const handleChangeFilter = (sortBy, filterName, text):void => {
    if (sortBy === POPULAR) {
     actionPopularity(sortByPopularity(filterName, filmsList));
    }

    if (sortBy === YEAR) {
      actionYear( sortByYear(text, initialFilmList) )
    }

    if (sortBy === USER_COLLECTION) {
      actionUserCollection(sortByUserCollection(filterName));
    }

    setCurrentOption(text)
    setCurrentFilter(filterName)
    setIsActive(!isActive)
}


  const selectCkickHandler = () => {
    setIsActive(!isActive)
  }

  return (
    <div className='select--box'>
      <h3 className='h3 filter--h3'>{headerText}</h3>
      <div
        className={isActive ? 'filter--active' : 'filter--select'}

        onClick={() => selectCkickHandler()}
      >{currentOption ? currentOption : defaultSelect}</div>

      <ul id="" className={isActive ? 'filter--drop' : 'filter--drop-hide'}>

        {options.map((item, id) => {
          return <li
            className='filter--option'
            key={id}
            onClick={() => handleChangeFilter(sortBy, item.sectionName, item.text)}
          >{item.text}
          </li>
        })}
      </ul>
    </div>

  )
}

export default FilterSelect
