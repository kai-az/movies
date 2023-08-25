import './Filters.css'
import { useState } from 'react'
import FilterBlock from '../FilterBlock/FilterBlock'
import GenresFilter from '../GenresFilter/GenresFilter'
import { FilterInitial } from '../filter-initial/filter-initial'





function Filters() {

    const [currentFilter, setCurrentFilter] = useState(null)

  return (
    <div className="filters">
      <h2 className='h2'>Фильтры</h2>
      <FilterInitial setCurrentFilter={setCurrentFilter} />
      <FilterBlock
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <GenresFilter />
    </div>
  )
}

export default Filters
