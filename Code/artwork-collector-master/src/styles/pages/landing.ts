import styled from 'styled-components';
import { shade } from 'polished';
// import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  img { 
    max-width: 300px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  place-content: center;

  align-items: center;

  width: 100%;
  max-width: 700px;

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
  flex: 1;
  
  background-size: cover;
`;
