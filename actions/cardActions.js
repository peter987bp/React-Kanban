export const RECIEVE_CARDS = 'RECEIVE_CARDS';


export const receiveCards = (data) =>{
  console.log('data: ', data);
  return {
    type: RECIEVE_CARDS,
    data,
  }
}