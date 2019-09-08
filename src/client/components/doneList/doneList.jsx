import React from 'react';
// import styles from './style.scss';
import List from "../list/list";

class DoneList extends React.Component {
  constructor() {
    super();
  }
    render() {
        var listItems;
         listItems = this.props.list.map((item, index) => {
            if (item.checked) {
                return (
                    <List
                        list={this.props.list}
                        checkItem={this.props.checkItem}
                        editItem={this.props.editItem}
                        updateItem={this.props.updateItem}
                        removeItem={this.props.removeItem} />
                )
            }
        });
        return (
            <div className="card bg-light w-100">
                <div className="card-header text-center font-weight-bold">Done List</div>
                <div className="card-body">
                    <p className="card-text">
                      {listItems}</p>
                </div>
            </div>
        )
    }
}

export default DoneList;



// <div className="col-4 p-2 offset-1 justify-content-center w-75">
//                     <DoneList
//                     list={this.state.list}
//                     editItem={this.editItem}
//                     updateItem={this.updateItem}
//                     removeItem={this.removeItem}
//                     checkItem={this.checkItem}
//                     />
// </div>