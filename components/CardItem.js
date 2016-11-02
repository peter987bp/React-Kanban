import React from 'react';
import styles from './CardItem.scss';
import { deleteCard, updateCard } from '../actions/cardActions';
import { connect } from 'react-redux';
import mapStateToProps from './CardPage';


class CardItem extends React.Component {
  constructor() {
    super();

    this.state= {
      id: '',
      title: '',
      piority_selection: '',
      status: '',
      created_by: '',
      assign_to: '',
    }

    this.deleteXHR = this.deleteXHR.bind(this);
    this.deleteAction = this.deleteAction.bind(this);
    this.onUpdateCard = this.onUpdateCard.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.changeAddedId = this.changeAddedId.bind(this);
    this.changeAddedTitle = this.changeAddedTitle.bind(this);
    this.changeAddedPioritySelection = this.changeAddedPioritySelection.bind(this);
    this.changeAddedStatus = this.changeAddedStatus.bind(this);
    this.changeAddedCreatedBy = this.changeAddedCreatedBy.bind(this);
    this.changeAddedAssignTo = this.changeAddedAssignTo.bind(this);
  };
  //Update forum methods
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

  deleteAction(deletedCard) {
    const parsedDeletedCard = JSON.parse(deletedCard.currentTarget.response).deleted;
    console.log('parsedDeletedCard: ', parsedDeletedCard);
    const { dispatch}= this.props;
    dispatch(deleteCard(parsedDeletedCard));
  }

  deleteXHR(){

    const urlDelete = `id=${this.props.id}`;
    const oReq = new XMLHttpRequest();

    oReq.open("DELETE", 'http://localhost:3000/api');
    oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    oReq.addEventListener('load', this.deleteAction);
    oReq.addEventListener('error', this.onCardError);

    oReq.send(urlDelete);
  }
  ///FIND OUT WHERE .FOO IS COMING FROM AND CHANGE IT
  onUpdateCard(serverUpdatedCard) {
    const parsedServerCard = JSON.parse(serverUpdatedCard.currentTarget.response).foo
    console.log('parsedServerCard: ', parsedServerCard);
    const {dispatch}= this.props;
    dispatch(updateCard(parsedServerCard));
  }

  updateCard() {
    const updater = {
      id: this.props.id,
      title: this.state.title,
      piority_selection: this.state.piority_selection,
      status: this.state.status,
      created_by: this.state.created_by,
      assign_to: this.state.assign_to,
    };
    let uriUpdater = `id=${updater.id}&title=${updater.title}&piority_selection=${updater.piority_selection}&status=${updater.status}&created_by=${updater.created_by}&assign_to=${updater.assign_to}`;
    const oReq = new XMLHttpRequest();
    oReq.open("PUT", 'http://localhost:3000/api');
    oReq.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    oReq.addEventListener("load", this.onUpdateCard);
    oReq.addEventListener("error", this.onCardError);
    console.log('uriUpdater: ', uriUpdater);
    oReq.send(uriUpdater);
  };


  render() {
    return (
      <div className={styles.CardItem}>
        <h3>{ this.props.title }</h3>
        <p>Assigned To: { this.props.assign_to }</p>
        <p>Created At: { this.props.createdAt }</p>
        <p>Created By: { this.props.created_by }</p>
        <p>{ this.props.pirority_select }</p>

        <p> Edit the Card</p>
        <input className={styles.title} type ="text"
          placeholder = "Title"
          value={this.state.title}
          onChange={this.changeAddedTitle} />
        <select className={styles.status} onChange={this.changeAddedStatus} value={this.state.status}>
          <option disabled='disabled' selected='selected'> Please select an option</option>
          <option value ="Todo">To-Do</option>
          <option value ="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
        <input className={styles.piorityselection}type="text"
          placeholder="Piority_selection"
          value= {this.state.piority_selection}
          onChange={this.changeAddedPioritySelection} />
        <input type ="text"
          placeholder = "Assign_to"
          value={this.state.assign_to}
          onChange={this.changeAddedAssignTo} />
        <input className={styles.createdBy} type="text"
          placeholder = "CreatedBy"
          value={this.state.created_by}
          onChange={this.changeAddedCreatedBy} />
        <button className={styles.edit} placeholder="Edit Card" onClick={this.updateCard}>
        Edit Card
        </button>
        <button className={styles.delete} onClick={this.deleteXHR}>Delete</button>
        </div>
    )
  }
};


export default connect(mapStateToProps)(CardItem);
