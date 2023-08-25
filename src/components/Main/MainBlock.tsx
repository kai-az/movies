import './MainBlock.css';
import Filters from '../Filters/Filters';
import FilmList from '../FilmList/FilmList';
import { Modal } from '../modal/modal';

function MainBlock() {

  return (
    <div className="main">
      <div className="mainblock--container container">
        <Filters />
        <FilmList />
        <Modal />
      </div>
    </div>
  )
}

export default MainBlock
