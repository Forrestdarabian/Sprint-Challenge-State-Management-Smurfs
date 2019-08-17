import axios from 'axios';
export const ERROR = 'ERROR';
export const GET_SMURFS = 'GET_SMURFS'
export const ADD_SMURF = 'ADD_SMURF'

export const getSmurfs = () => dispatch => {
  axios.get('http://localhost:3333/smurfs')
  .then(response => {
    console.log(response.data)
    dispatch({type: GET_SMURFS, payload: response.data})
  })
  .catch(err => {
dispatch({type: ERROR, payload: err.errorMessage})
})
}

export const addSmurf = newSmurf => dispatch => {
axios.post('http://localhost:3333/smurfs', newSmurf)
.then(response => {
  console.log(response.data)
  dispatch({type: ERROR, payload: response.data})
})
.catch(err => {
  dispatch({ type: ERROR, payload: err.errorMessage })
})
}
