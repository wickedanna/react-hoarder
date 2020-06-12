import React from 'react';

import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

import './NewStuff.scss';

class NewStuff extends React.Component {
  state = {
    itemImageNew: '',
    itemNameNew: '',
    newItemDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemNameNew: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImageNew: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ newItemDescription: e.target.value });
  }

  saveItem = (e) => {
    e.preventDefault();
    const { itemNameNew, itemImageNew, newItemDescription } = this.state;
    const newItem = {
      itemImage: itemImageNew,
      itemName: itemNameNew,
      itemDescription: newItemDescription,
      uid: authData.getUid(),
    };
    stuffData.addItem(newItem)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('could not save item: ', err));
  }

  render() {
    const { itemImageNew, itemNameNew, newItemDescription } = this.state;
    return (
      <div className="NewStuff col-12">
        <h1>New Stuff</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="item-name">Item Name</label>
            <input
            type="text"
            className="form-control"
            id="item-name"
            value={itemNameNew}
            onChange={this.nameChange}
            />
         </div>
         <div className="form-group">
            <label htmlFor="item-image">Item Image</label>
            <input
            type="text"
            className="form-control"
            id="item-image"
            value={itemImageNew}
            onChange={this.imageChange}
            />
         </div>
         <div className="form-group">
            <label htmlFor="item-description">Item Description</label>
            <input
            type="text"
            className="form-control"
            id="item-description"
            value={newItemDescription}
            onChange={this.descriptionChange}
            />
         </div>
          <button type="submit" className="btn btn-primary" onClick={this.saveItem}>Submit</button>
       </form>
      </div>
    );
  }
}

export default NewStuff;
