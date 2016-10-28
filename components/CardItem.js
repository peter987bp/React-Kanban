import React from 'react';
import styles from './CardItem.scss';

class CardItem extends React.Component {
  render() {
    return (
      <div className={styles.CardItem}>
        <h3>{ this.props.title }</h3>
        <p>Assigned To: { this.props.assign_to }</p>
        <p>Created At: { this.props.createdAt }</p>
        <p>Created By: { this.props.created_by }</p>
        <p>{ this.props.pirority_select }</p>
      </div>
    )
  }
};

export default CardItem;
