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
    console.log(this.props.list)
    // let index=this.props.index;
    //     let item=this.props.item;
    //     let checkboxClass = 'bx bx-checkbox';
    //     if (item.checked) {
    //         checkboxClass = 'bx bx-checkbox-checked';
    //     }

    var allList;
        allList = this.props.list.map((task) => {
        console.log(task)
            return(
                <div draggable = {true} className="row">
                    <div className="col-1">
                            <i className="bx bx-checkbox" onClick={() => this.check()}></i>
                    </div>
                    <div className="col-3">
                       <Item task={task} />
                    </div>
                   <div className="col-1 justify-content-end">
                     <i className='bx bxs-edit-alt' onClick={() => this.editing()}></i>
                    </div>

                   <div className="col-1 justify-content-end">
                    <i className='bx bxs-trash-alt' onClick={() => this.removal()}></i>
                   </div>
                   <div className="col-6">
                   <Moment fromNow></Moment>
                   </div>
                </div>
            );
        })

    return (
      <div className={styles.list} className="mx-auto">
          <div className="card bg-light w-100">
              <div className="card-header text-center font-weight-bold">To Do List
              </div>
              <div className="card-body">
                  <p className="card-text" className={styles.listText} >
                  {allList}</p>
              </div>
          </div>
      </div>
    );
  }
}

export default List;