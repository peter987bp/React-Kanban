import { List } from 'immutable';
import { RECEIVE_CARDS } from '../actions/cardActions';
import { DELETE_POST } from '../actions/cardActions';

const initialState = List();

const cardPostReducer = (state=initialState, action) => {
  switch(action.type) {
    case RECEIVE_CARDS:
      console.log('action.data: ', action.data);
      return List(action.data);
    case DELETE_POST:
      console.log('action.index: ', action.index);
      return state.delete(action.index);
    default:
      return state;
  }
}

export default cardPostReducer;