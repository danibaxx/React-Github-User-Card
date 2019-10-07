import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.fetchGitUsers()
  }

  fetchGitUsers = () => {
    axios
      .get('https://api.github.com/users/danibaxx')
      .then(response => {
        console.log('Response', response)
      })
      .catch(error => {
        console.log('Error', error)
      })
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}GitHub Usercard:</h1>
        {this.state.users.map((user) => (
          <h3>{user}</h3>
        ))}
        
      </div>
    )
  }
};
