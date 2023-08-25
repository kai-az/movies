import './GenresFilter.css'
import GenresCheckbox from '../GenresCheckbox/GenresCheckbox'
import { checkBox } from './consts'
import { useSelector } from 'react-redux'



function GenresFilter() {

  const checkboxList = useSelector(state => state.checkboxFilterReducer.initialList)

  const genres = checkboxList.map(item => {
  return <GenresCheckbox
      key={item.id}
      id={item.id}
      name={item.name}
      checked={item.checked}
    />
})

  return (
    <div className="genres--filter">
      {genres}
    </div>
  )
}

export default GenresFilter
