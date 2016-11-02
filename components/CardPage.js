import React from 'react';
import { connect } from 'react-redux';
import { receiveCards } from '../actions/cardActions';
import { updateCard, addedCard } from '../actions/cardActions';
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
    this.onAddCard = this.onAddCard.bind(this);
    this.addedCard = this.addedCard.bind(this);
    this.changeAddedId = this.changeAddedId.bind(this);
    this.changeAddedTitle = this.changeAddedTitle.bind(this);
    this.changeAddedPioritySelection = this.changeAddedPioritySelection.bind(this);
    this.changeAddedStatus = this.changeAddedStatus.bind(this);
    this.changeAddedCreatedBy = this.changeAddedCreatedBy.bind(this);
    this.changeAddedAssignTo = this.changeAddedAssignTo.bind(this);

  };

  //PageLoad methods
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

  //Add Card Methods
  changeAddedTitle(event){
    this.setState({ title: event.target.value});
  }
  changeAddedPioritySelection(event){
    this.setState( { piority_selection: event.target.value});
  }
  changeAddedStatus(event){
    this.setState({ status: event.target.value});
  }
  changeAddedCreatedBy(event){
    this.setState({ created_by: event.target.value});
  }
  changeAddedAssignTo(event){
    this.setState({ assign_to: event.target.value});
  }
  changeAddedId(event){
    this.setState({ id: event.target.value});
  }

  addedCard(serverCardposted) {
    const parsedCardPosted = JSON.parse(serverCardposted.currentTarget.response).cardPosted
    console.log('parsedCardPosted: ', parsedCardPosted);
    console.log('this.props: ', this.props);
    const { dispatch } =this.props;
    dispatch(addedCard(parsedCardPosted));
  }

  onAddCard() {
    const addedCard = {
       title: this.state.title,
      piority_selection: this.state.piority_selection,
      status: this.state.status,
      created_by: this.state.created_by,
      assign_to: this.state.assign_to,
    };
    console.log('addedCard.title: ', addedCard.title);
    let uriAddedCard = `title=${addedCard.title}&piority_selection=${addedCard.piority_selection}&status=${addedCard.status}&created_by=${addedCard.created_by}&assign_to=${addedCard.assign_to}`;
    console.log('uriAddedCard: ', uriAddedCard);
    const oReq = new XMLHttpRequest();
    oReq.open("POST", this.props.cardUrl);
     oReq.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    oReq.addEventListener("load", this.addedCard);
    oReq.addEventListener("error", this.onCardError);
    oReq.send(uriAddedCard);
  }

  componentDidMount() {
    this.loadDataFromCard();
  };




  render() {
    return (
      <div>
      <input type ="text"
        placeholder = "Title"
        value={this.state.title}
        onChange={this.changeAddedTitle} />
      <select onChange={this.changeAddedStatus} value={this.state.status}>
          <option disabled='disabled' selected='selected'> Please select an option</option>
          <option value ="Todo">To-Do</option>
          <option value ="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
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
      <button placeholder="Edit Card" onClick={this.onAddCard}>
      Add a New Card
      </button>
        <div className={styles.CardPage}>
          <CardList title='To-Do' cards={ this.props.data.filter((todo) =>{
            return todo.status ==='Todo'}) } />
          <CardList title='Doing' cards={ this.props.data.filter((doing) =>{
            return doing.status ==='Doing'}) } />
          <CardList title='Done' cards={ this.props.data.filter((done) =>{
            return done.status ==='Done'}) } cardUrl = { this.props.cardUrl }/>
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
  console.log('state: ', state);
  // let cardPostReducer = state.cardPostReducer;
  return {
    data: cardReducer.toJS(),
  }
}

export default connect(
  mapStateToProps)(CardPage);