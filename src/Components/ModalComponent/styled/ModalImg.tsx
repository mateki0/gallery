import styled from 'styled-components';
import device from '../../MediaQuerySizes';
const ModalImg = styled.img<{ width?: number; zoomed?: boolean }>`
  vertical-align: middle;
  max-width: 100%;
  width: ${(props) => (props.zoomed ? `${props.width}px` : 'auto')};
  cursor: pointer;
  height: ${(props) => (props.zoomed ? 'auto' : '20vh')};

  @media ${device.tablet} {
    height: ${(props) => (props.zoomed ? 'auto' : '30vh')};
  }
  @media ${device.laptopL} {
    height: ${(props) => (props.zoomed ? 'auto' : '60vh')};
  }
  @media ${device.desktop} {
    height: ${(props) => (props.zoomed ? 'auto' : '80vh')};
  }
`;

export default ModalImg;
