import styled from 'styled-components';
import Modal from 'react-modal';

const StyledModal = styled(Modal)`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  width: 80vw;
  padding: 0 20px 20px 20px;
  background-color: #383838;
  outline: none;
  max-height: 90vh;
  overflow-y: auto;
`;

export default StyledModal;
