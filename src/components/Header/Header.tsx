import { useSelector } from 'react-redux'
import { actionModalVisible, actionAuth } from '../../store/actions'
import { Link } from "react-router-dom";
import './Header.css'

import { AuthButton } from '../auth-button/auth-button'


function Header() {

  const isShow = useSelector(state => state.modalReducer.isShow)
  const isAuthState = useSelector(state => state.authReducer.isAuth)
  const isAuth = localStorage.getItem('isAuth') || isAuthState



  const showModal = () => {
    actionModalVisible(!isShow)
  }


 let currentButton = isAuth
    ? <AuthButton
        styles={'header--item login--btn'}
     showModal={
       () => {
         actionAuth(!isAuth)
        localStorage.removeItem('isAuth');
       }
     }
        text={'Logout'}
      />
    : <AuthButton
        styles={'header--item login--btn'}
        showModal={() => showModal()}
        text={'Login'}
    />;

  return (
    <div className="header ">
      <div className="header-container container">
        <Link className='header--link' to='/'><div className='header--item logo'>Home</div></Link>
        {currentButton}
      </div>
    </div>
  )
}

export default Header
