// Hdr.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Hdr.css';

const Hdr = () => {
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("auth-token"));
  }, []);

  const signInButtonStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '20px', // Adjust the padding as needed
    textAlign: 'right', // Align buttons to the right
  };

  const navigate = useNavigate();

  const onLogoutClick = () => {
    localStorage.setItem("auth-token", "");
    setToken(localStorage.getItem("auth-token"));
    navigate('/login');
  };

  if (!token) {
    return (
      <div className="hdr">
  
        <div className="button-container" style={signInButtonStyle}>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
  
        {/* Placeholder for absolute images */}
        <div className="absolute-images">
          {/* P */}
          <img src="https://cdn.discordapp.com/attachments/341337244927524873/1176216473161715786/image.png?ex=656e0ff4&is=655b9af4&hm=d30a4a61fa2720041d05576edb20419e13151abe3ca8d9c85d0c8a4e16386dba&" alt="Image 1" style={{ position: 'absolute', top: '250px', left: '350px', width: '370px', height: '500px'  }} />
          <img src="https://cdn.discordapp.com/attachments/341337244927524873/1176216528358744174/image.png?ex=656e1001&is=655b9b01&hm=e928d31f060da960e77d6db0ed6a18d290b99245db2cd996105e869e05ddae79&" alt="Image 2" style={{ position: 'absolute', top: '250px', left: '770px', width: '370px', height: '500px'  }} />
          <img src="https://cdn.discordapp.com/attachments/341337244927524873/1176220117135261777/image.png?ex=656e1359&is=655b9e59&hm=fb2267242678a42fa95ef3ea1231f2c7b4e16b5d6fc072096269fb543b9a16ac&" alt="Image 3" style={{ position: 'absolute', top: '-30px', left: '625px', width: '200px', height: '200px'  }} />
          <img src="https://cdn.discordapp.com/attachments/341337244927524873/1176225403245965332/More-reviews-below-11-20-2023.png?ex=656e1845&is=655ba345&hm=472ffaeb5dc1c67c9cc9c2ee620755f065503e1522d5bd26d5eb8bab70367423&" alt="Image 4" style={{ position: 'absolute', top: '800px', left: '500px', width: '500px', height: '100px'  }} />
        </div>
      </div>  
    );
  }

  return (
    <div className="hdr">

      <div className="button-container" style={signInButtonStyle}>
      <button type="button" onClick={onLogoutClick}>Logout</button>
      </div>

      {/* Placeholder for absolute images */}
      <div className="absolute-images">
        {/* P */}
        <img src="https://cdn.discordapp.com/attachments/341337244927524873/1176216473161715786/image.png?ex=656e0ff4&is=655b9af4&hm=d30a4a61fa2720041d05576edb20419e13151abe3ca8d9c85d0c8a4e16386dba&" alt="Image 1" style={{ position: 'absolute', top: '250px', left: '350px', width: '370px', height: '500px'  }} />
        <img src="https://cdn.discordapp.com/attachments/341337244927524873/1176216528358744174/image.png?ex=656e1001&is=655b9b01&hm=e928d31f060da960e77d6db0ed6a18d290b99245db2cd996105e869e05ddae79&" alt="Image 2" style={{ position: 'absolute', top: '250px', left: '770px', width: '370px', height: '500px'  }} />
        <img src="https://cdn.discordapp.com/attachments/341337244927524873/1176220117135261777/image.png?ex=656e1359&is=655b9e59&hm=fb2267242678a42fa95ef3ea1231f2c7b4e16b5d6fc072096269fb543b9a16ac&" alt="Image 3" style={{ position: 'absolute', top: '-30px', left: '625px', width: '200px', height: '200px'  }} />
        <img src="https://cdn.discordapp.com/attachments/341337244927524873/1176225403245965332/More-reviews-below-11-20-2023.png?ex=656e1845&is=655ba345&hm=472ffaeb5dc1c67c9cc9c2ee620755f065503e1522d5bd26d5eb8bab70367423&" alt="Image 4" style={{ position: 'absolute', top: '800px', left: '500px', width: '500px', height: '100px'  }} />
      </div>
    </div>  
  );
};

export default Hdr;
