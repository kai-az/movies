import { Options } from "./interfaces/Filters"


export const API = {
    postersUrl: 'https://image.tmdb.org/t/p/w500',
}

export const user = {
    name: 'Kai',
    password: '12345'
}



export const POPULAR_INCREASE = 'POPULAR_INCREASE';
export const POPULAR_DECREASE = 'POPULAR_DECREASE';
export const RAITING_INCREASE = 'RAITING_INCREASE';
export const RAITING_DECREASE = 'RAITING_DECREASE';

export const YEAR_2017 = 'YEAR_2017'
export const YEAR_2018 = 'YEAR_2018'
export const YEAR_2019 = 'YEAR_2019'
export const YEAR_2020 = 'YEAR_2020'
export const WATCH_LATER = 'WATCH_LATER'
export const FAVOURITES = 'FAVOURITES'

export const FILTERS_TEXT = {
    POPULAR_INCREASE: 'Популярные по возврастанию',
    POPULAR_DECREASE: 'Популярные по убыванию',
    RAITING_INCREASE: 'Рейтинг по возврастанию',
    RAITING_DECREASE: 'Рейтинг по убыванию',
    YEAR_2017: 2017,
    YEAR_2018: 2018,
    YEAR_2019: 2019,
    YEAR_2020: 2020,
    WATCH_LATER: 'Смотреть позже',
    FAVOURITES: 'Избранное'
}


export const SORT_BY_POPULARITY = 'SORT_BY_POPULARITY'
export const SORT_BY_YEAR = 'SORT_BY_YEAR'
export const SORT_BY_GENRES = 'SORT_BY_GENRES'
export const SORT_BY_USER_COLLECTION = 'SORT_BY_USER_COLLECTION'
export const INITIAL_FILTERS = 'INITIAL_FILTERS';
export const CHECKBOX_TOGGLE = 'CHECKBOX_TOGGLE';
export const AUTH_MODAL = 'AUTH_MODAL';
export const USER_AUTH = 'USER_AUTH';
export const USER_FAVOURITES = 'USER_FAVOURITES';
export const USER_WATCH_LATER = 'USER_WATCH_LATER';






export const POPULAR = 'POPULAR';
export const YEAR = 'YEAR'
export const USER_COLLECTION = 'USER_COLLECTION'


export const filterPopular: Array<Options> = [
    { text: FILTERS_TEXT.POPULAR_INCREASE, id: 1, sectionName: POPULAR_INCREASE },
    { text: FILTERS_TEXT.POPULAR_DECREASE, id: 2, sectionName: POPULAR_DECREASE },
    { text: FILTERS_TEXT.RAITING_INCREASE, id: 3, sectionName: RAITING_INCREASE },
    { text: FILTERS_TEXT.RAITING_DECREASE, id: 4, sectionName: RAITING_DECREASE },
]

export const filterYear: Array<Options> = [
    { text: FILTERS_TEXT.YEAR_2017, id: 1, sectionName: YEAR_2017 },
    { text: FILTERS_TEXT.YEAR_2018, id: 2, sectionName: YEAR_2018 },
    { text: FILTERS_TEXT.YEAR_2019, id: 1, sectionName: YEAR_2019 },
    { text: FILTERS_TEXT.YEAR_2020, id: 2, sectionName: YEAR_2020 },
]

export const filterUserCollection: Array<Options> = [
    { text: FILTERS_TEXT.WATCH_LATER, id: 1, sectionName: WATCH_LATER },
    { text: FILTERS_TEXT.FAVOURITES, id: 2, sectionName: FAVOURITES },
]

export const selects = [
    { filterName: POPULAR, options: filterPopular, defaultSelect: FILTERS_TEXT.RAITING_DECREASE, headerText: 'Сортировать по:', authentication: true,},
    { filterName: YEAR, options: filterYear, defaultSelect: FILTERS_TEXT.YEAR_2020, headerText: 'Год выпуска:', authentication: true },
    { filterName: USER_COLLECTION,  options: filterUserCollection, defaultSelect: 'Выберите из списка', headerText: 'Избранное:', authentication: false},
]
