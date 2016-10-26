import React from 'react';
import CardItem from './CardItem';

class CardList extends React.Component {
  render() {
    console.log('this.props.data: ', this.props.data);
    const cardListNode = this.props.data.map((dataItem) => {
      return (
        <CardItem
          author={ dataItem.data.author }
          title={ dataItem.data.title }
          key={ dataItem.data.id }
        />
      )
    })
    return (
      <div>
        <h2>Card List</h2>
        { cardListNode }
      </div>
    )
  }
};

export default CardList;