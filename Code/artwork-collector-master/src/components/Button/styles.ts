import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #5B13BB;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    cursor: pointer;
    background: ${shade(0.2, '#5B13BB')};
  }
`;
