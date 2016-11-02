import { List } from 'immutable';
import { RECEIVE_CARDS, DELETE_CARDS, UPDATE_CARDS, ADDED_CARDS } from '../actions/cardActions';


const initialState = List();


const cardReducer = (state=initialState, action) => {
  switch(action.type) {
    case RECEIVE_CARDS:
      console.log('action.data: ', action.data);
      return List(action.data);
    case DELETE_CARDS:
      console.log('action.deleted: ', action.deletedCard);
      let deleteIndex = state.findIndex((indexOfCard)=>{
        return indexOfCard.id === action.deletedCard.id;
      });
      console.log('deleteIndex: ', deleteIndex);
      return state.delete(deleteIndex);
    case UPDATE_CARDS:
      let updateIndex = state.findIndex((indexOfCard)=> {
        return indexOfCard.id === action.updater.id;
      });
      return state.set(updateIndex, action.added);
    case ADDED_CARDS:
      console.log('action.index: ', action.added);
      return state.push(action.added);
    default:
    //ALWAYS RETURN A LIST
      return state;
  }
}

export default cardReducer;