import React from 'react';
import styles from './CardItem.scss';
import { deleteCard } from '../actions/cardActions';
import { connect } from 'react-redux';

class CardItem extends React.Component {
  constructor() {
    super();

    this.onDeleteCard = this.onDeleteCard.bind(this);
  };

  onDeleteCard(data){
    console.log('this.props:', this.props);
    const { dispatch, index}= this.props;
    dispatch(deleteCard(index));
  }
  render() {
    return (
      <div className={styles.CardItem}>
        <h3>{ this.props.title }</h3>
        <p>Assigned To: { this.props.assign_to }</p>
        <p>Created At: { this.props.createdAt }</p>
        <p>Created By: { this.props.created_by }</p>
        <p>{ this.props.pirority_select }</p>
        <button onClick={this.onDeleteCard}>Delete</button>
      </div>
    )
  }
};

export default connect() (CardItem);
