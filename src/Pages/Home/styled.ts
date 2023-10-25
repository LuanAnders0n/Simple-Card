import styled from 'styled-components';
import background from '../../images/background.jpg';

export const Container = styled.div`
  .back {
    background-image: url(${background});
    width: 100%;
    height: 100%;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .img-card {
    margin: 20px;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    background-color: #171f31;
    background: #c4c4c5;
    background: linear-gradient(145deg, #d2d2d3, #b0b0b1);
    box-shadow: inset 8px 8px 16px #fff, inset -8px -8px 16px #6a6a6a;
  }

  .img {
    width: 300px;
    height: 300px;
    border-radius: 100%;
    border: 3px solid #fff;
  }

  .icons {
    width: 100px;
    height: 100px;
    float: left;
  }

  .card {
    margin: 20px;
    width: 550px;
    height: 190px;
    background-color: #171f31;
    border-radius: 29px;
    background: #1c2435;
    box-shadow: inset -8px -8px 16px #0f131d, inset 8px 8px 16px #29354d;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #fff;
    font-weight: 900;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  @media only screen and (max-width: 1200px) {
  }
`;
