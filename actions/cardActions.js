export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const DELETE_CARDS = 'DELETE_CARDS';
export const UPDATE_CARDS = 'UPDATE_CARDS';
export const ADDED_CARDS = 'ADDED_CARDS';

export const receiveCards = (data) =>{
  return {
    type: RECEIVE_CARDS,
    data,
  }
}

export const deleteCard = (deletedCard) =>{
  console.log('deletedCard: ', deletedCard);
  return{
    type: DELETE_CARDS,
    deletedCard: deletedCard,
  }
}

export const updateCard = (updater) =>{
  console.log('updater: ', updater);
  return{
    type: UPDATE_CARDS,
    updater: updater,
  }
}

export const addedCard = (added) =>{
  console.log('added: ', added);
  return{
    type: ADDED_CARDS,
    added: added,
  }
}