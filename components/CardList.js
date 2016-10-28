import React from 'react';
import CardItem from './CardItem';
import styles from './CardList.scss';

class CardList extends React.Component {
  render() {
    // console.log('this.props: ', this.props.cards);
    const CardListNode = this.props.cards.map((dataItem) => {
      return (
        <CardItem
          title={ dataItem.title }
          assign_to={ dataItem.assign_to}
          createdAt={ dataItem.createdAt }
          created_by={ dataItem.created_by }
          pirority_selection={ dataItem.pirority_selection }
          key={ dataItem.id }
        />
      )
    })
    return (
      <div className={styles.CardList}>
        <h2>{this.props.title}</h2>
        { CardListNode }
      </div>
    )
  }
};

export default CardList;