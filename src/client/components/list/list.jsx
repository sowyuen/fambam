import React from 'react';
import styles from './style.scss';

import Moment from 'react-moment';

import Item from "../item/item";

class List extends React.Component {
  constructor() {
    super();
  }

  removal() {
    this.props.removeItem();
  }
  editing() {
    this.props.editItem();
  }

  check(){
    this.props.checkItem();
  }

  render() {
    let currentList = this.props.list;
    var allList;
        allList = currentList.map((task,index) => {
        return(
            <div key={index} draggable = {true} className="row">
                <input className="ml-4 mr-4 offset-1"type="checkbox" onClick={() => this.check()}/>
                <Item task={task} className="ml-4 mr-4"/>
                 <i className='bx bxs-edit-alt ml-4' onClick={() => this.editing()}></i>
                <i className='bx bxs-trash-alt' onClick={() => this.removal()}></i>
               <Moment className="ml-4 mr-4" fromNow></Moment>
            </div>
        );
    })

    return (
      <div className="justify-content-center overflow-auto">
          <div className={`card ${styles.list}`}>
              <div className="text-center font-weight-bold">To Do List
              </div>
              <div className="card-body">
                  <div className="container">
                      <div className={`card-text ${styles.listText}`}>
                        {allList}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default List;