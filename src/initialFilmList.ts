import { filmData } from "./mockData";

export const initialFilmList = () => {
    const yearSort = filmData.filter(item => {
        if (!item.release_date.indexOf('2020')) {
            return item
        }
    })
    const result = [...yearSort].sort((a, b) => b.vote_average - a.vote_average)
    return result
}
