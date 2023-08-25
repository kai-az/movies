
import { filmData } from "../mockData"
import { initialFilmList } from "../initialFilmList"

import { SORT_BY_POPULARITY, SORT_BY_YEAR, SORT_BY_GENRES, INITIAL_FILTERS, SORT_BY_USER_COLLECTION } from './../consts';


const defaultState = {
    initialList: filmData,
    filmList: initialFilmList()
}



export const filmFilterReducer = (state = defaultState, action) => {

     switch (action.type) {
         case SORT_BY_POPULARITY:
             return { ...state, filmList: action.payload }
         case SORT_BY_YEAR:
             return { ...state, filmList: action.payload }
         case SORT_BY_GENRES:
             return { ...state, filmList: action.payload }
         case SORT_BY_USER_COLLECTION:
             return { ...state, filmList: action.payload }
         case INITIAL_FILTERS:
             return { ...state, filmList: action.payload }

        default: return state
     }

}
