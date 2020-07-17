import React from 'react';
import Body from './Components/Body/Body'
import styled from 'styled-components';
const CreditDiv = styled.div`
    position:absolute;
    top:120px;
    left:20px;
`
const UnsplashCredit = styled.a`
    color:#fff;
    font-size:16px;
    writing-mode:vertical-rl;
    &:hover{
      color:#e5e5e5;
    }
    transition:color .5s;

`
function App() {
  
  return (
    <div>
      <CreditDiv>
        <UnsplashCredit href="http://unsplash.com">See more on Unsplash official site</UnsplashCredit>
      </CreditDiv>
      <Body/>
    </div>
  );
}

export default App;
