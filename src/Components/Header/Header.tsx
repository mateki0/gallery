import React,{useState} from "react"
import styled from 'styled-components'
import {Search } from '@styled-icons/boxicons-regular'
import device from '../MediaQuerySizes'
const SearchDiv = styled.div`
  box-sizing:border-box;
  display:flex;
  justify-content:center;
  
  margin:15px 30px 50px 0;
`

const SearchInput = styled.input`
  
  border-radius:30px;
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

  @media ${device.mobileS}{
    padding:10px 10px;
  }
  @media ${device.tablet} {
    padding:10px 50px;
  }
  @media ${device.laptop} {
    padding:10px 80px
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

const Header = ({...props}) => {
  const [query, setQuery] = useState<string>('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value)
  }

  const setQueried = () => {
    
    props.setFetchUrl(`https://api.unsplash.com/search/photos?per_page=30&page=1&query=${query}`);
    props.setIsQuery(true);
    props.setPage(1);
  }
  const enterSearch = (e: { key: string }) => {
    if(e.key === 'Enter'){
      setQueried();
    }
  }
  
  return(
    <SearchDiv >
      <SearchButton onClick={setQueried}/>
      <SearchInput onChange={(e)=>handleInput(e)} onKeyPress={enterSearch} placeholder="Search photo"/>
    </SearchDiv>
  )
}

export default Header;