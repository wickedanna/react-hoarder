import React from 'react';

import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

import MyStuff from '../../shared/MyStuff/MyStuff';

import './Home.scss';

class Home extends React.Component {
  state = {
    stuff: [],
  }

  getStuff = () => {
    const uid = authData.getUid();
    stuffData.getStuffByUid(uid)
      .then((stuff) => this.setState({ stuff }))
      .catch((err) => console.error('unable to get stuff: ', err));
  }

  componentDidMount() {
    this.getStuff();
  }

  removeItem = (itemId) => {
    stuffData.deleteItem(itemId)
      .then(() => this.getStuff())
      .catch((err) => console.error('could not delete item: ', err));
  }

  render() {
    const { stuff } = this.state;
    const buildMyStuff = stuff.map((item) => (
      <MyStuff key={item.id} item={item} removeItem={this.removeItem} />
    ));

    return (
      <div className="Home col-12">
        <h1>My Stuff</h1>
        <div className="d-flex flex-wrap">
        {buildMyStuff}
        </div>
      </div>
    );
  }
}

export default Home;
