import styled from 'styled-components';
import ResizeIcon from './ResizeIcon';

const ModalImgWrapper = styled.div`
  margin: 20px auto;
  width: auto;
  &:hover ${ResizeIcon} {
    opacity: 1;
  }
  position: relative;
`;

export default ModalImgWrapper;
