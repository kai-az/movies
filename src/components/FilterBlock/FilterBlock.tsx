import './FilterBlock.css'
import { useSelector } from 'react-redux';
import FilterSelect from '../FilterSelect/FilterSelect';
import { selects } from '../../consts'





const FilterBlock = ({ setCurrentFilter, currentFilter }) => {

  const isAuth= useSelector(state => state.authReducer.isAuth)

  const filterElements = selects
  .filter((item) => isAuth || item.authentication)
  .map((item, id) => (
    <FilterSelect
      key={id}
      options={item.options}
      sortBy={item.filterName}
      defaultSelect={item.defaultSelect}
      headerText={item.headerText}
      setCurrentFilter={setCurrentFilter}
      currentFilter={currentFilter}
    />
  ));



  return (
    <div className='filter--block'>

      {filterElements}
    </div>
  )
}

export default FilterBlock
