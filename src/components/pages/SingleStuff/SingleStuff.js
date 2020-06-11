import React from 'react';

import './SingleStuff.scss';
import stuffData from '../../../helpers/data/stuffData';

class SingleStuff extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    stuffData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('could not get single item: ', err));
  }

  render() {
    const { item } = this.state;

    return (
      <div className="SingleStuff col-12 d-flex flex-wrap">
        <h2 className="my-3 col-12">{item.itemName}</h2>
        <img className="col-6 m-auto single-item-img" src={item.itemImage} alt={item.itemDescription} />
        <h5 className="col-4 mt-5 m-auto">{item.itemDescription}</h5>
      </div>
    );
  }
}

export default SingleStuff;
