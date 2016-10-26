import React from 'react';

class CardItem extends React.Component {
  render() {
    return (
      <div className="cardItem">
        <h4>{ this.props.title }</h4>
        <p>{ this.props.author }</p>
      </div>
    )
  }
};

export default CardItem;
