
import { USER_AUTH } from './../consts';

const defaultState = {
    isAuth: localStorage.getItem('isAuth') || false,
}

export const authReducer = (state = defaultState, action) => {

    switch (action.type) {
        case USER_AUTH:
            return { ...state, isAuth: action.payload }

        default: return state
    }

}
