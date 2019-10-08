import React, { Component } from 'react';
import User from './User';

class UserCard extends Component {
  render() {
    return(
      <div className='user-card'>
        <ul>
          {this.props.users.map(user => {
            return (
              <User 
                name={user.name} 
                login={user.login} 
                img={user.html_url} 
                location={user.location} 
                bio={user.bio} 
                followers={user.followers} 
                following={user.following} 
              />
            );
          })}
        </ul>
        <h1>Hi from UserCard</h1>
      </div>
    );
  }
};

export default UserCard;