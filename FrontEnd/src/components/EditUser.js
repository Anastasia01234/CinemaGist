import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import './AddUser.css';
import Button from './Button';
import Card from './Card';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};


const EditUser = () => {
  const navigate = useNavigate();

  const {id} = useParams();

  let url = 'http://localhost:4000/' + id;

  const [item, setItem] = useState({
    username: '',
    rating: 0,
    img: '',
    description: '',
    movieTitle: '',
});


  useEffect(() => {
    axios
      .get('http://localhost:4000/' + id)
      .then((res) => {
        setItem({
          username: res.data.username,
          rating: res.data.rating,
          img: res.data.img,
          description: res.data.description,
          movieTitle: res.data.movieTitle,
        });
      })
      .catch((err) => {
        console.log('Error from EditUser');
      });
  }, [id]);

  const onChange = (e) => {
      setItem({...item, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
      e.preventDefault();

      const data = {
        username: item.username,
          rating: item.rating,
          img: item.img,
          description: item.description,
          movieTitle: item.movieTitle,
      };

      axios
          .put('http://localhost:4000/'+ id, data)
          .then((res) => {
              navigate('/');
          })
          .catch((err) => {
              console.log('Error in EditItem');
          });
  }

  const deleteClick = () => {
    
    axios
      .delete(url)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log("Error from delete");
      });
  };

  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("auth-token"));
  }, []);

  if (!token) {
    navigate('/login')
  };

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
      <Button type="button" onClick={deleteClick}>Delete</Button>
    </Card>
  );
};

const styles = {
  stars: {
    display: "flex",
    flexDirection: "row",
  }
};

export default EditUser;
