import styled from 'styled-components';
import { shade } from 'polished';
import backgroundImg from '../../images/background.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  place-content: center;

  align-items: start center;

  width: 100%;
  max-width: 700px;
  color: #fff;

  .users {
    margin-top: 50px;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img { 
    margin: 20px 0;
    max-width: 300px;
  }
  h2 {
    color: #fff;
    margin: 30px 0;
  }

  form {
    margin:40px 0 40px ;
    width: 320px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #312e38;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#312e38')};
      }
    }
  }

  > a {
    color: #5B13BB;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#5B13BB')};
    }
  }
`;

export const Background = styled.div`
  /* flex: 1; */
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #8e46ec 0%, #5B13BB 100%);
  /* background: url(${backgroundImg}); */
  /* background-size: cover; */
`;
