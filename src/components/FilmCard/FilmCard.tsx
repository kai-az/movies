import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './FilmCard.css'
import { Link } from "react-router-dom";
import Star from '../../svgComponents/Star'
import WatchLater from '../../svgComponents/WatchLater'
import { actionModalVisible, actionUserWatchLater, actionUserFavourites  } from '../../store/actions'
import { IfilmData } from '../../interfaces/mock'
import { API , USER_FAVOURITES, USER_WATCH_LATER } from '../../consts'


interface IbuttonIcon  {
  name: string,
  isActive: boolean,
}

type FilmCardProps = {
  item: IfilmData
  isAuth: boolean,
}


const FilmCard: React.FunctionComponent<FilmCardProps> = ({ item, isAuth }) => {

  const { title, poster_path, vote_average, id, release_date } = item;

  const watchLaterList = useSelector(state => state.userCollection.userWatchLater)
  const userFavouritesList = useSelector(state => state.userCollection.userFavourites)
  const isShow = useSelector(state => state.modalReducer.isShow)

  const [watchLater, setWatchLater] = useState(isAuth ? watchLaterList.includes(id) : false)
  const [favourite, setFavourite] = useState(isAuth ? userFavouritesList.includes(id) : false)


  useEffect(() => {
    setWatchLater(watchLaterList.includes(id))
    setFavourite(userFavouritesList.includes(id))

  }, [isAuth])


  const handleFavourite = (index: string): void => {
    if (index === id) {
      setFavourite(prev => !prev)
      if (userFavouritesList.indexOf(index) === -1) {
        addUserCollection(index, USER_FAVOURITES);
        localStorage.setItem('favourites', JSON.stringify([...userFavouritesList, index]))
      } else {
        removeUserCollection(index, USER_FAVOURITES)
        localStorage.setItem('favourites', JSON.stringify([...userFavouritesList.filter(item => item !== index)]))

      }
    }
  }

  const handleWatchLater = (index: string): void => {
    if (index === id) {
      setWatchLater(prev => !prev)
      if (watchLaterList.indexOf(index) === -1) {
        addUserCollection(index, USER_WATCH_LATER)
        localStorage.setItem('watchLater', JSON.stringify([...watchLaterList, index]))
      } else {
        removeUserCollection(index, USER_WATCH_LATER)
         localStorage.setItem('watchLater', JSON.stringify([...watchLaterList.filter(item => item !== index)]))
      }
    }
  }

  const addUserCollection = (index, list) => {
    switch (list) {
      case USER_FAVOURITES:
        actionUserFavourites([...userFavouritesList, index])
        break;
      case USER_WATCH_LATER:
        actionUserWatchLater([...watchLaterList, index])
         break;
    }
  }

   const removeUserCollection = (index, list) => {
    switch (list) {
      case USER_FAVOURITES:
        actionUserFavourites([...userFavouritesList.filter(item => item !== index)])
        break;
      case USER_WATCH_LATER:
        actionUserWatchLater(watchLaterList.filter(item => item !== index))
         break;
    }
  }

  return (
    <li className="film--card">
      <div className='poster'>
        <img src={`${API.postersUrl}${poster_path}`} alt={`обложка фильма ${title}`} />
      </div>
      <div className='film--info'>
        <div className='top'>
          <div className="rate--block">
            <div className="rate">{`Рейтинг ${vote_average}`}</div>
            <div className="icon--block">
              <Star
                className={isAuth && favourite ? 'card--icon active' : 'card--icon'}
                width='18'
                height='18'
                id={id}
                handleClick={ isAuth ? () => handleFavourite(id) : () => actionModalVisible(!isShow) }
              />
               <WatchLater
                    className={isAuth && watchLater ? 'card--icon active' : 'card--icon'}
                    width='18'
                    height='18'
                    id={id}
                    handleClick={isAuth ? () => handleWatchLater(id) : () => actionModalVisible(!isShow)}
                  />
            </div>
          </div>
          <h4 className='card--h'>{title}</h4>
          <p>{ release_date}</p>
       </div>
        <button className='card--btn bottom'><Link className='card--link' to={`${id}`}>Подробнее</Link></button>
      </div>
    </li>
  )
}

export default FilmCard
