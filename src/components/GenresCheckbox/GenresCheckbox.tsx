import { useSelector } from 'react-redux';
import './GenresCheckbox.css';

import { actionGenres, actionCheckboxToggle } from '../../store/actions';

const GenresCheckbox = ({name, id, checked}) => {

  const filmsList = useSelector(state => state.filmFilterReducer.filmList)
  const checkboxList = useSelector(state => state.checkboxFilterReducer.initialList)

  const sortByGenres = (id, films) => {
    const result = [...films].filter(item => {
      if (item.genre_ids.includes(Number(id))) {
          return item
      }
    })
    return result
  }
const checkboxToggle = (index) => {
  const updatedCheckboxList = checkboxList.map((item) => {
  if (item.id === index) {
    return { ...item, checked: !item.checked };
  }
    return item;
  });
  console.log('updatedCheckboxList', updatedCheckboxList);
  return updatedCheckboxList
};

const handleChange = (index) => {
    actionCheckboxToggle(checkboxToggle(index));
    actionGenres(sortByGenres(index, filmsList));
};

  return (
    <label className="checkbox-container" id={id}>
      <input type="checkbox" checked={checked} onChange={() => handleChange(id)} />
          <span className="checkbox-checkmark"></span>
          <div>{name}</div>
    </label>
  );
};

export default GenresCheckbox;
