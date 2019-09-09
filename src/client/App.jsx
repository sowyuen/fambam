import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './style.scss';

import Moment from 'react-moment';
import 'moment-timezone';
import ReactAnimatedWeather from 'react-animated-weather';
import Calendar from 'react-calendar';

import Input from "./components/input/input";
import List from "./components/list/list";
import DoneList from "./components/doneList/doneList";
import Clock from "./components/clock/clock";
import Particle from "./components/particle/particle";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word:"",
      list : [],
      editing: false,
      date: new Date()
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
    const defaults = {
      icon: 'PARTLY_CLOUDY_DAY',
      color: 'goldenrod',
      size: 70,
      animate: true
    };
    return (
    <React.Fragment>
        <div><Particle/></div>
        <div className="container">
            <div className="row">
            <nav className="navbar nav-fill w-100 bg-transparent">
            <ul>
            <li>
              <img src="https://i.pinimg.com/736x/0b/69/5b/0b695b5f633e668404a1e1ee86c2fb75.jpg" height="60px" width="60px"/>
              <a className="navbar-brand">Fambam</a>
            </li>
            </ul>
              <div className={`justify-content-end d-flex ${styles.navbarText}`} id="navbarText">
              <ul>
                <li>
                    <ReactAnimatedWeather
                        icon={defaults.icon}
                        color={defaults.color}
                        size={defaults.size}
                        animate={defaults.animate}
                    />
                </li>
              </ul>
              <ul>
                <li>
                    <Clock />
                    <Moment format="Do MMM YYYY" className="p-1">
                    </Moment>
                    <Moment format="dddd">
                    </Moment>
                </li>
              </ul>
              </div>
            </nav>

            </div>
            <hr className={styles.hr}></hr>
            <div className="row d-flex flex-col my-3">
                <div className="col-md-6 text-center mt-5 offset-1">
                    <Input input={this.state.word} setInput={this.setInput} addItem={this.addItem}/>
                </div>

                <div className="col-md-4 offset-1">
                    <Calendar className={styles.calendar}/>
                </div>
            </div>


            <div className="row justify-content-center">
                <div className="col justify-content-center">
                    <List
                    list={this.state.list}
                    removeItem={this.removeItem}
                    editItem={this.editItem}
                    updateItem={this.updateItem}
                    checkItem={this.checkItem}
                        />
                </div>
            </div>
        </div>
    </React.Fragment>
    );
  }
}

export default hot(module)(App);