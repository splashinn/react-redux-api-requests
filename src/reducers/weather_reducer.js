import constants from '../constants/index';

// let initial_state = {
//     maps: []
// }

let initial_state = [];

export default function(state = initial_state, action) {
   switch(action.type) {
    case constants.FETCH_CITY:
    // let newState = Object.assign({}, state)
    // newState['maps'] = action.payload
    // return newState
    return [action.payload.data, ...state]
    
   }
   return state
}