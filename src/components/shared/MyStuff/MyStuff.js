import React from 'react';

import itemShape from '../../../helpers/propz/itemShape';

import './MyStuff.scss';

class MyStuff extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    return (
      <div className="MyStuff col-3 my-2">
        <div className="card">
          <img src={item.itemImage} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.itemDescription}</p>
        </div>
        </div>
      </div>
    );
  }
}

export default MyStuff;
