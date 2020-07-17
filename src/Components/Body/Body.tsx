import React,{useState, useEffect} from "react";
import styled from 'styled-components';
import Header from '../Header/Header'
import axios from 'axios'
import  Images from '../Images/Images';

const StyledMain = styled.main`
  margin: 0 auto;
  width:70%;
`

const Body = () =>{
  return(
    <StyledMain>
      <Header/>
      <Images/>
    </StyledMain>
  )
}

export default Body