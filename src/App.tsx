import React from 'react';
import Body from './Components/Body';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
  body,html{
    top:0;
    margin:0;
    height:100%;
    background:#D68F09;
    font-family: 'Inconsolata', monospace;
  #root{
    height:100%;
    top:0;
    margin:0;
    left:0;
    right:0;
  }
  }
`;
function App() {
  return (
    <div>
      <GlobalStyle />
      <Body />
    </div>
  );
}

export default App;
