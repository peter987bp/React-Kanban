import React from 'react';
import { connect } from 'react-redux';
import { receivePosts } from '../actions/cardActions';
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
    this.submitAdd = this.submitAdd.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.changeAddedId = this.changeAddedId.bind(this);
    this.changeAddedTitle = this.changeAddedTitle.bind(this);

    this.changeAddedPioritySelection = this.changeAddedPioritySelection.bind(this);
    this.changeAddedStatus = this.changeAddedStatus.bind(this);
    this.changeAddedCreatedBy = this.changeAddedCreatedBy.bind(this);
    this.changeAddedAssignTo = this.changeAddedAssignTo.bind(this);

  };

  onCardData(data) {
    const parsedCardData = JSON.parse(data.currentTarget.response);
    this.setState({ cards: parsedCardData.cards });
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

  //Add forum methods
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

  //call CreateNew Add with submitAdd

  updateCard() {
    let newAdd = this.submitAdd();
    console.log('newAdd: ', newAdd);
    console.log('newAdd.: ', newAdd.title);
    let urlNewAdd = `id=${newAdd.id}&title=${newAdd.title}`;
    console.log('urlNewAdd: ', urlNewAdd);
    const oReq = new XMLHttpRequest();
    oReq.open("PUT", this.props.cardUrl);
    oReq.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    console.log('submitAdd: ', this.submitAdd());
    oReq.addEventListener("load", this.submitAdd());
    oReq.addEventListener("error", this.onCardError);
    oReq.send(urlNewAdd);
  };

  //creates object to be sent to the database
  submitAdd() {
    let newAdd = {
      id: this.state.id,
      title: this.state.title,
      piority_selection: this.state.piority_selection,
      status: this.state.status,
      created_by: this.state.created_by,
      assign_to: this.state.assign_to,
    };
      return newAdd
  };
  render() {
    return (
      <div className={styles.addForum}>
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
          <button placeholder="Edit Card" onClick={this.updateCard}>
          Click Me
          </button>
        <div className={styles.CardPage}>
          <CardList title='To-Do' cards={ this.state.cards.filter((todo) =>{
            return todo.status ==='Todo'}) } />
          <CardList title='Doing' cards={ this.state.cards.filter((doing) =>{
            return doing.status ==='Doing'}) } />
          <CardList title='Done' cards={ this.state.cards.filter((done) =>{
            return done.status ==='Done'}) } />
        </div>
      </div>
    )
  };
};

{CardPage.PropTypes ={
  data: React.PropTypes.array,
}}

// export default connect(
//   mapStateToProps)(CardPage);
// const mapStateToProps= (state, ownProps) => {
//   const { cardPostReducer } = state;
//   return {
//     data: cardPostReducer.toJS()
//   }
// }

export default CardPage ;










