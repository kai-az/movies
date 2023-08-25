
import { checkBox } from '../components/GenresFilter/consts';

import { CHECKBOX_TOGGLE } from './../consts';


const defaultState = {
    initialList: checkBox,
}



export const checkboxFilterReducer = (state = defaultState, action) => {

     switch (action.type) {
         case CHECKBOX_TOGGLE:
             return { ...state, initialList: action.payload }


        default: return state
     }

}
