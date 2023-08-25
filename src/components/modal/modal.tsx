import { useSelector } from 'react-redux';
import { useState } from 'react';
import { actionModalVisible, actionAuth } from '../../store/actions';
import { user } from '../../consts'

import './modal.css'

export const Modal = () => {
    const initialState = {
        name: '',
        password: ''
    }

    const [formData, setFormData] = useState(initialState);


    const isShow = useSelector(state => state.modalReducer.isShow)

    const closeHandler = () => {
        actionModalVisible(!isShow)
    }

    const changeHandler = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (user.name === formData.name && user.password === formData.password) {
            actionAuth(true)
            localStorage.setItem('isAuth', true)
            closeHandler()
        }
    }


  return (
      <div className={isShow ? "modal-overlay modal-active" : "modal-overlay"}>
      <div className="modal-content">
        <button className="close-button" onClick={closeHandler} />
        <form className="modal-form" onSubmit={(e) => submitHandler(e)}>
          <div className="form-group">
            <label htmlFor="login">Login:</label>
            <input
              type="text"
              id="login"
              name="name"
              placeholder="Enter your login"
              onChange = {e => changeHandler(e)}
            />
          </div>
          <div className="form-group form--password">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange = {(e) => changeHandler(e)}
            />
          </div>
          <button type="submit" className="submit-button">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
