import styled from 'styled-components';
import device from '../../MediaQuerySizes';

const NoPermissionError = styled.span`
  color: #fff;
  @media ${device.mobileS} {
    font-size: 14px;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.desktop} {
    font-size: 22px;
  }
`;

export default NoPermissionError;
