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

  render() {
    const { stuff } = this.state;
    const buildMyStuff = stuff.map((item) => (
      <MyStuff key={item.id} item={item} />
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
