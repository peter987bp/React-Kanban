export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const DELETE_CARDS = 'DELETE_CARDS';
export const UPDATE_CARDS = 'UPDATE_CARDS';

export const receiveCards = (data) =>{
  return {
    type: RECEIVE_CARDS,
    data,
  }
}

export const deleteCard = (index) =>{
  return{
    type: DELETE_CARDS,
    index: index,
  }
}

export const updateCard = (updater) =>{
  console.log('updater: ', updater);
  return{
    type: UPDATE_CARDS,
    updater: updater,
  }
}