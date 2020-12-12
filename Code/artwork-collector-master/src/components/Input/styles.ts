import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #666360;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #5B13BB;
      border-color: #5B13BB;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #5B13BB;
      border-color: #5B13BB;
    `}
  
  input:focus{
    border: none;
    box-shadow: 0;
    outline: 0;
  }
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #5B13BB;
    
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
