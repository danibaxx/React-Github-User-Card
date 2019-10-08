import React, { Component } from 'react';
import axios from 'axios';

import UserCard from './User/UserCard';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/danibaxx')
      .then(response => {
        console.log('Response', response)
        this.setState({
          users: response.data
        })
      })
      .catch(error => {
        console.log('Error', error)
      })
  };

  render() {
    return (
      <div>
        <h1>GitHub Usercard:</h1>
        <UserCard users={this.state.users}/>
      </div>
    )
  }
};
