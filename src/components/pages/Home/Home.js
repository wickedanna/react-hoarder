import React from 'react';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    this.props.history.push('edit/12345');
  }

  singleEvent = (e) => {
    e.preventDefault();
    this.props.history.push('item/12345');
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-dark" onClick={this.editEvent}>Edit</button>
        <button className="btn btn-dark" onClick={this.singleEvent}>Single</button>
      </div>
    );
  }
}

export default Home;
