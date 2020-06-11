import React from 'react';
import { Link } from 'react-router-dom';

import itemShape from '../../../helpers/propz/itemShape';

import './MyStuff.scss';

class MyStuff extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
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

          </div>
        </div>
      </div>
    );
  }
}

export default MyStuff;
