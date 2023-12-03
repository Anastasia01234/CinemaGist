// App.js
// import './App.css'; // Comment out or remove this line
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import Hdr from './Hdr';
import UsersList from './UsersList';

function ShowItemList() {
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("auth-token"));
  }, []);

  const [users, setUsers] = useState([{
    _id: '',
    username: '',
    rating: 0,
    img: '',
    description: '',
    movieTitle: '',
}]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowItemList');
      });
  }, []);

  if (!token) {
    return (
      <div>
        <Hdr  />
  
        <div className="body-content">
          {/* Body Content Goes Here */}
        </div>
  
        <div className="card-section">
          <UsersList users={users} />
        </div>
      </div>
    );
    
  }

  return (
    <div>
      <Hdr/>

      <div className="body-content">
        {/* Body Content Goes Here */}
      </div>

      <div className="card-section">
        <Link to='/create-item' className='link'>Leave Review!</Link>
        <UsersList users={users} />
      </div>
    </div>
  );
}

export default ShowItemList;
