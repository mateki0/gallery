import styled from 'styled-components'
import {Search } from '@styled-icons/boxicons-regular'

const SearchButton = styled(Search)`
  position:relative;
  right:-50px;
  top:5px;
  width:36px;
  height:36px;
  &:hover{
    cursor:pointer;
  }
`
export default SearchButton;