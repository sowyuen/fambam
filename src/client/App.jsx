import React from 'react';
import { hot } from 'react-hot-loader';

import styles from './style.scss';

import Input from "./components/input/input";
import List from "./components/list/list";
import DoneList from "./components/doneList/doneList";
import Clock from "./components/clock/clock";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word:"",
      list : [],
      editing: false
    }
    this.setInput = this.setInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.checkItem = this.checkItem.bind(this);

  }
  setInput (input){
    this.setState({word: input})
  }
    changeHandler(){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
  }

  addItem(){
    this.state.list.push(this.state.word);
    this.setState(this.state.list);
    console.log("this.state.list",this.state.list);
  }

  removeItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({list: list});
  }

  editItem(index){
        let list = this.state.list;
        if (!this.state.editing) {
            list[index].editing = true;
            this.setState({
                list: list,
                wordEdit: list[index].todo,
                editing: true
            });
        }
        else {
            if (list[index].editing) {
                list[index].editing = false;
                this.setState({
                    list: list,
                    wordEdit: "",
                    editing: false
                });
            }
        }
    }

    updateItem(e,index,word) {
        e.preventDefault();
        let list = this.state.list;
        list[index].todo = word;
        list[index].editing = false;
        this.setState({
            list: list,
            editing: false
        });
    }

    checkItem(index) {
        let list = this.state.list;
        if(list[index].checked) {
            list[index].checked = false;
        }
        else {
            list[index].checked = true;
        }
        this.setState({list: list});
    }

  render() {
    return (
        <div>
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">Fambam</a>
        </nav>
        <div className="row">
            <div className="col-2 offset-1">
                <Clock />
            </div>
        </div>

          <div className="row justify-content-center">
            <Input input={this.state.word} setInput={this.setInput} addItem={this.addItem}/>
          </div>
          <div className="row">
            <div className="col-4 p-2 offset-1 justify-content-center w-75">
                <List
                list={this.state.list}
                removeItem={this.removeItem}
                editItem={this.editItem}
                updateItem={this.updateItem}
                checkItem={this.checkItem}
                    />
            </div>
            <div className="col-4 p-2 offset-1 justify-content-center w-75">
                <DoneList
                list={this.state.list}
                editItem={this.editItem}
                updateItem={this.updateItem}
                removeItem={this.removeItem}
                checkItem={this.checkItem}
                />
            </div>
          </div>
        </div>
    );
  }
}

export default hot(module)(App);