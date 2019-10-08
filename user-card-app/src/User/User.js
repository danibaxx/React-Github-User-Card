import React from 'react';

const User = props => {
  return(
    <div className='user'>
      <img 
        src={props.avatar_url} 
        key={props.id} 
        alt={props.name} 
      />
      <h1>{props.name}</h1>
      <p>{props.login}</p>
      <p>Profile: {props.html_url}</p>
      <p>Location: {props.location}</p>
      <p>Bio: {props.bio}</p>
      <p>Followers: {props.followers}</p>
      <p>Following: {props.following}</p>
    </div>
  );
};

export default User;