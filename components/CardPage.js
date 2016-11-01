import React from 'react';
import { connect } from 'react-redux';
import { receiveCards } from '../actions/cardActions';
import { updateCard } from '../actions/cardActions';
import CardList from './CardList';
import styles from './CardPage.scss';


class CardPage extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      id: '',
      title: '',
      piority_selection: '',
      status: '',
      created_by: '',
      assign_to: '',
    };
    this.onCardData = this.onCardData.bind(this);

  };

  onCardData(data) {
    //dispatches an action that sends a payload to the recieveCard action
    // const { dispatch } = this.props;
    const dispatch = this.props.dispatch;
    const parsedCardData = JSON.parse(data.currentTarget.response).cards;
    dispatch(receiveCards(parsedCardData));
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

  componentWillReceiveProps(nextProps) {
    console.log('nextProps.data: ', nextProps.data);
    this.loadDataFromCard();
  }



  render() {
    return (
      <div>
      <input type="text"
        placeholder="id"
        value= {this.state.id}
        onChange={this.changeAddedId} />
      <input type ="text"
        placeholder = "Title"
        value={this.state.title}
        onChange={this.changeAddedTitle} />
      <input type="text"
        placeholder="status"
        value= {this.state.status}
        onChange={this.changeAddedStatus} />
      <input type="text"
        placeholder="Piority_selection"
        value= {this.state.piority_selection}
        onChange={this.changeAddedPioritySelection} />
      <input type ="text"
        placeholder = "Assign_to"
        value={this.state.assign_to}
        onChange={this.changeAddedAssignTo} />
      <input type="text"
        placeholder = "CreatedBy"
        value={this.state.created_by}
        onChange={this.changeAddedCreatedBy} />
      <button placeholder="Edit Card" onClick={this.onUpdateCard}>
      Add a New Post
      </button>
        <div className={styles.CardPage}>
          <CardList title='To-Do' cards={ this.props.data.filter((todo) =>{
            return todo.status ==='Todo'}) } />
          <CardList title='Doing' cards={ this.props.data.filter((doing) =>{
            return doing.status ==='Doing'}) } />
          <CardList title='Done' cards={ this.props.data.filter((done) =>{
            return done.status ==='Done'}) } />
        </div>
      </div>
    )
  };
};

{CardPage.PropTypes ={
  data: React.PropTypes.array,
}}

//what is this doing
const mapStateToProps= (state, ownProps) => {
  const { cardReducer } = state;
  // let cardPostReducer = state.cardPostReducer;
  console.log('cardReducer.toJS(): ', cardReducer.toJS());
  return {
    data: cardReducer.toJS(),
  }
}

export default connect(
  mapStateToProps)(CardPage);