import React from 'react';
import { Container } from './styled';
import perfil from '../../images/perfil.jpeg';
import GitHub from '../../images/github.svg';
import Linkedin from '../../images/3225190_app_linkedin_logo_media_popular_icon.svg';
import Instagram from '../../images/1217086_instagram_icon.svg';

const Home = () => {
  return (
    <div>
      <Container>
        <div className="back">
          <div className="img-card">
            <img className="img" src={perfil} alt="" />
          </div>
          <a href="https://www.linkedin.com/in/luananders0n/">
            <button className="card">
              <img className="icons" src={Linkedin} alt="" />
              <h1>LINKEDIN</h1>
            </button>
          </a>
          <a href="https://github.com/LuanAnders0n">
            <button className="card">
              <img className="icons" src={GitHub} alt="" />
              <h1>GITHUB</h1>
            </button>
          </a>
          <a href="https://www.instagram.com/luan_anders0n/">
            <button className="card">
              <img className="icons" src={Instagram} alt="" />
              <h1>INSTAGRAM</h1>
            </button>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Home;
