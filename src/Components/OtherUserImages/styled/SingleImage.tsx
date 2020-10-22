import styled from 'styled-components';
import device from '../../MediaQuerySizes';

const SingleImage = styled.img`
  box-sizing: border-box;
  filter: brightness(100%);
  object-fit: cover;
  width: 100%;
  display: inline-block;
  margin: 5px 0;
  transition: filter 0.5s;
  &:hover {
    cursor: pointer;
    filter: brightness(75%);
  }

  @media ${device.mobileS} {
    height: 80px;
  }
  @media ${device.mobileL} {
    height: 100px;
  }

  @media ${device.tablet} {
    height: 120px;
  }
  @media ${device.laptop} {
    height: 180px;
  }
  @media ${device.desktop} {
    height: 200px;
  }
`;
export default SingleImage;
