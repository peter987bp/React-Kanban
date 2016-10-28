export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const DELETE_CARDS = 'DELETE_CARDS';

export const receiveCards = (data) =>{
  console.log('data: ', data);
  return {
    type: RECEIVE_CARDS,
    data,
  }
}

export const deleteCard = (index) =>{
  console.log('index: ', index);
  return{
    type: DELETE_CARDS,
    index,
  }
}