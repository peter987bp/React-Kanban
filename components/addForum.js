import React from 'react';
import styles from './AddForum.scss';
import { connect } form 'react-redux';
import { receiveCards} from '/..actions/cardActions';
import CardList from './CardList';

class AddForum extends React.Component {
  render() {
    const CardListNode = this.props.cards.map((dataItem) => {
      return (
        <AddedItems

        />
      )
    })
    return (
      <div className={styles.AddFourm}>
        { CardListNode }
      </div>
    )
  }
};

export default CardList;