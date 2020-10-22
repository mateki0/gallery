import styled from 'styled-components';

import device from '../../MediaQuerySizes'

const StyledMain = styled.main`
  margin: 0 auto;
  width:95%;

  @media ${device.laptopL}{
    width:75%;
  }
`
export default StyledMain;