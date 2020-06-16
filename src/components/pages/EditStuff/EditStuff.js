import React from 'react';

import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

import './EditStuff.scss';

class EditStuff extends React.Component {
  state = {
    itemImageNew: '',
    itemNameNew: '',
    newItemDescription: '',
  }

  componentDidMount() {
    const editId = this.props.match.params.itemId;
    stuffData.getSingleItem(editId)
      .then((response) => {
        const item = response.data;
        this.setState({
          itemImageNew: item.itemImage,
          itemNameNew: item.itemName,
          newItemDescription: item.itemDescription,
        });
      })
      .catch((err) => console.error('could not get item to edit: ', err));
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

  editItem = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;
    const { itemNameNew, itemImageNew, newItemDescription } = this.state;
    const updatedItem = {
      itemImage: itemImageNew,
      itemName: itemNameNew,
      itemDescription: newItemDescription,
      uid: authData.getUid(),
    };
    stuffData.updateItem(itemId, updatedItem)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('could not update item: ', err));
  }

  render() {
    const { itemImageNew, itemNameNew, newItemDescription } = this.state;
    return (
      <div className="EditStuff col-12">
        <h1>Edit Item</h1>
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
          <button type="submit" className="btn btn-primary" onClick={this.editItem}>Submit</button>
       </form>
      </div>
    );
  }
}

export default EditStuff;
