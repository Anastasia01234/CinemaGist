import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import User from './User';
import './UsersList.css';

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};

const UsersList = (props) => {

  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("auth-token"));
  }, []);

  if (!token) {
    return (
      <div className="users-container">
        <div className="users">
          {props.users.map((user, index) => (
            <div key={index} className="user-card">
              <User
                username={user.username}
                img={user.img}
                movieTitle={user.movieTitle}
                description={user.description}
              />
              <div className="review-card">
                <span>Rating: </span>
                <div style={styles.stars}>
                  {[...Array(user.rating)].map((_, index) => (
                    <FaStar
                      key={index}
                      size={20}
                      color={colors.orange}
                      style={{
                        marginRight: 2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="users-form-gap"></div> {/* Add this div for the gap */}
        {/* form contnet */}
      </div>
    );

  }

  return (
    <div className="users-container">
      <div className="users">
        {props.users.map((user, index) => (
          <div key={index} className="user-card">
            <User
              username={user.username}
              img={user.img}
              movieTitle={user.movieTitle}
              description={user.description}
            />
            <div className="review-card">
              <span>Rating: </span>
              <div style={styles.stars}>
                {[...Array(user.rating)].map((_, index) => (
                  <FaStar
                    key={index}
                    size={20}
                    color={colors.orange}
                    style={{
                      marginRight: 2,
                    }}
                  />
                ))}
              </div>
            </div>
            <Link to={'/edit-user/' + user._id}>Edit</Link>
          </div>
        ))}
      </div>
      <div className="users-form-gap"></div> {/* Add this div for the gap */}
      {/* form contnet */}
    </div>
  );

  
};

const styles = {
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
};

export default UsersList;
