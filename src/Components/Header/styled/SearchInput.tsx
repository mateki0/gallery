import styled from 'styled-components';
import device from '../../MediaQuerySizes';
const SearchInput = styled.input`
  border-radius: 30px;
  outline: none;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-align: center;
  border: none;
  color: #000;
  box-shadow: 0 0 25px 0 #efefef, 0 20px 25px 0 rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: #000;
    opacity: 0.3;
    font-weight: 600;
  }

  @media ${device.mobileS} {
    padding: 10px 10px;
  }
  @media ${device.tablet} {
    padding: 10px 50px;
  }
  @media ${device.laptop} {
    padding: 10px 80px;
  }
`;
export default SearchInput;
