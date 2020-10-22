import styled from 'styled-components';
import { ResizeFullScreen } from '@styled-icons/entypo';

const ResizeIcon = styled(ResizeFullScreen)`
  width: 22px;
  height: 22px;
  position: absolute;
  opacity: 0;
  top: 12px;
  right: 16px;
  color: #fff;
  transition: opacity 0.5s;
`;
export default ResizeIcon;
