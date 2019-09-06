import React from 'react';
// import styles from './style.scss';

class Item extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>{this.props.task}</p>
      </div>
    );
  }
}

export default Item;