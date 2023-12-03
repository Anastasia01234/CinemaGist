import axios from 'axios';
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './AddUser.css';
import Button from './Button';
import Card from './Card';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};


const AddUser = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState({
      username: '',
      rating: 0,
      img: '',
      description: '',
      movieTitle: '',
  });

  const onChange = (e) => {
      setItem({...item, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
      e.preventDefault();

      axios
          .post('http://localhost:4000/', item)
          .then((res) => {
              setItem({
                  username: '',
                  rating: 0,
                  img: '',
                  description: '',
                  movieTitle: '',
              });
              navigate('/');
          })
          .catch((err) => {
              console.log('Error in createItem');
          });
  }

  return (
    <Card className="input">
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={item.username}
          onChange={onChange}
        />
        <label>Movie Title</label>
        <input
          type="text"
          name="movieTitle"
          value={item.movieTitle}
          onChange={onChange}
        />
        <label>Rating</label>
        <div style={styles.stars}>
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              size={24}
              onClick={() => setItem((prevItem) => ({ ...prevItem, rating: index + 1 }))}
              color={(item.rating > index) ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          ))}
        </div>
        <label>Link to image</label>
        <input
          type="text"
          name="img"
          value={item.img}
          onChange={onChange}
        />
        <label>Review Description</label>
        <input
          type="text"
          name="description"
          value={item.description}
          onChange={onChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

const styles = {
  stars: {
    display: "flex",
    flexDirection: "row",
  }
};

export default AddUser;
