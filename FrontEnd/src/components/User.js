import React from 'react';
import './User.css';

const User = (props) => {
  return (    
    <li key={props.id} className="user-item">
      <img src={props.img} className="user-img" alt={props.name} />
      <div className="user-info">
        <h2>{props.username}</h2>
        <h3>Movie Title: {props.movieTitle}</h3>
        <h3 className="user-content">Description: {props.description}</h3>
      </div>
    </li>
  );
}

export default User;

