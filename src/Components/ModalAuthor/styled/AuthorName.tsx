import styled from 'styled-components';

const AuthorName = styled.a`
  color: #fff;
  width: 100%;
  font-weight: 600;
  font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
  text-decoration: none;
  &:hover {
    color: #e6e6e6;
  }
  white-space: nowrap;
`;
export default AuthorName;
