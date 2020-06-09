import React from 'react';

import './SingleStuff.scss';

class SingleStuff extends React.Component {
  render() {
    const itemId = this.props.match.params.stuffId;
    return (
      <div className="SingleStuff">
        <h1>Single Stuff</h1>
        <h2>Single stuff id is {itemId}</h2>
      </div>
    );
  }
}

export default SingleStuff;
