import { List } from 'immutable';
import {RECIEVE_CARDS} from '../actions/cardActions';

const initialState = List();

const cardPostReducer = (state = initialState, action)=>{
  switch (action.type){
    case RECIEVE_CARDS:
      console.log('actiondata', action.data);
      return List (action.data);
    default:
      return state;
  }
}

export default cardPostReducer;