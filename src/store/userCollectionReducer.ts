
import { USER_FAVOURITES, USER_WATCH_LATER } from './../consts';

const defaultState = {
    userFavourites: JSON.parse(localStorage.getItem('favourites')) || [],
    userWatchLater:  JSON.parse(localStorage.getItem('watchLater')) || []
}

export const userCollectionReducer = (state = defaultState, action) => {

    switch (action.type) {
        case USER_FAVOURITES:
            return { ...state, userFavourites: action.payload }
          case USER_WATCH_LATER:
            return { ...state, userWatchLater: action.payload }

        default: return state
    }


}
