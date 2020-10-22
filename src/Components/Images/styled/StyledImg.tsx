import device from '../../MediaQuerySizes';
import styled from 'styled-components';

const StyledImg = styled.img`
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
    height: 100px;
  }
  @media ${device.mobileL} {
    height: 120px;
  }
  @media ${device.tablet} {
    height: 150px;
  }
  @media ${device.laptop} {
    height: 220px;
  }
  @media ${device.desktop} {
    height: 250px;
  }
`;
export default StyledImg;
