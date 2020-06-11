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
      <div className="SingleStuff">
        <h1>Single Stuff</h1>
        <h2>Single stuff id is {item.id}</h2>
      </div>
    );
  }
}

export default SingleStuff;
