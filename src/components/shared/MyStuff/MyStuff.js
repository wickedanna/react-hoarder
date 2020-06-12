import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import itemShape from '../../../helpers/propz/itemShape';

import './MyStuff.scss';

class MyStuff extends React.Component {
  static propTypes = {
    removeItem: PropTypes.func.isRequired,
    item: itemShape.itemShape,
  }

  render() {
    const { item, removeItem } = this.props;
    const singleLink = `items/${item.id}`;
    const editLink = `edit/${item.id}`;

    return (
      <div className="MyStuff col-3 my-2">
        <div className="card">
          <img src={item.itemImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.itemDescription}</p>
          <Link className="btn btn-dark m-1" to={singleLink}><i className="far fa-eye"></i></Link>
          <Link className="btn btn-dark m-1" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
          <button className="btn btn-danger m-1" onClick={() => removeItem(item.id)}><i className="far fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyStuff;
