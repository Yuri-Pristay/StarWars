import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Users from './Users.jsx';
import Form from './Form.jsx';
import Star_wars from './star_wars.jsx'
import movieDetails from './movieDetails.jsx';

class App extends Component {
  state = {
    count:0,
    name:"Yura",
    users:["user1"],
    star_wars_open:true
  };
  incr = () => this.setState((prevState)=> ({
    count: prevState.count + 1
  }));
  changeName = (event)=>
    this.setState({
      name: event.target.value
    });
  addUser = ()=>{
    this.setState(
      (prevState)=>({
        users: [...prevState.users, prevState.name],
        name:""
      })
    )
  }
  tog_star_wars = ()=>{
    this.setState((prevState)=>{
      return({
        star_wars_open:!prevState.star_wars_open
      })})
  }
  render() {
    const {count,name,users,star_wars_open} = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <Form name={name} onChange={this.changeName} onClick={this.addUser}></Form>
        <Users users={users}></Users>
        {star_wars_open && <Star_wars></Star_wars>}
        <button onClick={this.tog_star_wars}>toggle star wars</button>
      </div>
    );
  };
};

export default App;
