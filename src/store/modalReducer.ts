
import { AUTH_MODAL } from './../consts';

const defaultState = {
    isShow: false,
}

export const modalReducer = (state = defaultState, action) => {

    switch (action.type) {
        case AUTH_MODAL:
            return { ...state, isShow: action.payload }

        default: return state
    }

}
