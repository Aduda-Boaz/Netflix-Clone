import styled from 'styled-components/macro';
import { Link as ReachRouterlink } from 'react-router-dom';

export const Container = styled.div``;

export const Error = styled.div``;

export const Base = styled.div``;

export const Title = styled.h1``;

export const Text = styled.p``;

export const TextSmall = styled.p``;

export const Link = styled(ReachRouterlink)`
    color: white;
    text-decoration: none;
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;