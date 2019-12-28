import { GET_SMURFS, ERROR, ADD_SMURF } from '../components/actions.js/index'

const initialState = {
    smurfs: [],
    fetchingSmurf: false,
    addingSmurf: false,
    error: null
  };

  
  
  
  export const rootReducer = (state = initialState, action) => {

    switch(action.type){
      case GET_SMURFS:
        return {...state, smurfs: action.payload};
        case ADD_SMURF:
          return {...state, smurfs: action.payload, addingSmurf: true}
        case ERROR:
          return {...state, error: action.payload}
      default:
        return state
    }
  };

