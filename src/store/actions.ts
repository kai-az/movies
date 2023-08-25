import { store } from '../store'
import {
    SORT_BY_POPULARITY,
    SORT_BY_YEAR,
    SORT_BY_GENRES,
    INITIAL_FILTERS,
    CHECKBOX_TOGGLE,
    AUTH_MODAL,
    USER_AUTH,
    USER_FAVOURITES,
    USER_WATCH_LATER,
    SORT_BY_USER_COLLECTION
} from '../consts'


export const actionPopularity = payload => store.dispatch({ type: SORT_BY_POPULARITY, payload })
export const actionYear = payload => store.dispatch({ type: SORT_BY_YEAR, payload })
export const actionUserCollection = payload => store.dispatch({ type: SORT_BY_USER_COLLECTION, payload })
export const actionGenres = payload => store.dispatch({ type: SORT_BY_GENRES, payload })
export const actionInitialFilters = payload => store.dispatch({ type: INITIAL_FILTERS, payload })
export const actionCheckboxToggle = payload => store.dispatch({ type: CHECKBOX_TOGGLE, payload })
export const actionModalVisible = payload => store.dispatch({ type: AUTH_MODAL, payload })
export const actionAuth = payload => store.dispatch({ type: USER_AUTH, payload })
export const actionUserFavourites = payload => store.dispatch({ type: USER_FAVOURITES, payload })
export const actionUserWatchLater = payload => store.dispatch({ type: USER_WATCH_LATER, payload })
