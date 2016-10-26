import React from 'react';
import CardList from './CardList';


class CardPage extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };

    this.onCardData = this.onCardData.bind(this);
  };

  onCardData(data) {
    console.log('data: ', data);
    const parsedCardData = JSON.parse(data.currentTarget.response)
    console.log('parsedCardData: ', parsedCardData);
    this.setState({ data: parsedCardData.data.children });
  };

  onCardError(error) {
    console.error('error: ', error);
  };

  loadDataFromCard() {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", this.onCardData);
    oReq.addEventListener("error", this.onCardError);
    oReq.open("GET", this.props.cardUrl);
    oReq.send();
  };

  componentDidMount() {
    this.loadDataFromCard();
  };

  render() {
    return (
      <div>
        <h1>Card Page</h1>
        <CardList data={ this.state.data } />
      </div>
    )
  };
};

export default CardPage;
