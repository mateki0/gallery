import styled from 'styled-components';

const InstaLink = styled.a<{ insta: string }>`
  text-decoration: none;
  color: #fff;
  font-size: calc(8px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
  transition: color 0.3s;
  &:hover {
    color: #e6e6e6;
  }
  display: ${(props) => {
    if (props.insta === null) {
      return 'none';
    } else {
      return 'block';
    }
  }};
`;
export default InstaLink;
