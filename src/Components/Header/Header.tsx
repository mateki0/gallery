import React from "react"
import styled from 'styled-components'
import {Search } from '@styled-icons/boxicons-regular'

const SearchDiv = styled.div`
  box-sizing:border-box;
  display:flex;
  justify-content:center;
  margin:15px 0 50px 0;
`

const SearchInput = styled.input`
  border-radius:30px;
  padding:10px 80px;
  outline:none;
  font-size:20px;
  font-weight:600;
  letter-spacing:0.05em;
  text-align:center;
  border:none;
  color:#000;
    box-shadow: 0 0 25px 0 #efefef,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
  
  &::placeholder{
    color:#000;
    opacity:0.3;
    font-weight:600;
  }
`
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

const Header = () => {
  return(
    <SearchDiv>
      <SearchButton />
      <SearchInput placeholder="Search photo"/>
      
    </SearchDiv>
  )
}

export default Header;