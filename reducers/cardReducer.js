import { List } from 'immutable';
import { RECEIVE_CARDS, DELETE_CARDS, UPDATE_CARDS } from '../actions/cardActions';


const initialState = List();


const cardReducer = (state=initialState, action) => {
  switch(action.type) {
    case RECEIVE_CARDS:
      console.log('action.data: ', action.data);
      return List(action.data);
    case DELETE_CARDS:
      console.log('action.index: ', action.index);
      return state.delete(action.index);
    case UPDATE_CARDS:
      let updateIndex = state.findIndex((indexOfCard)=> {
        return indexOfCard.id === action.updater.id;
      });
      return state.set(updateIndex, action.updater);
    default:
    //ALWAYS RETURN A LIST
      return state;
  }
}

export default cardReducer;