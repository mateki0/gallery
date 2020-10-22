import React from 'react';
import Author from '../ModalAuthor';
import HeaderWrapper from './styled/HeaderWrapper';
import {IHandleProps} from '../types'

const ModalHeader = ({ modalSrc }:{ modalSrc?:IHandleProps }) => {
  if(modalSrc){
  const {profileImg, profileLink, insta, name} = modalSrc
    return(
        <HeaderWrapper>
            <Author profileImg={profileImg} profileLink={profileLink} insta={insta} name={name}/>
        </HeaderWrapper>
    )
  }
  return(
    <HeaderWrapper>
        <div>Loading...</div>
    </HeaderWrapper>
)
}
export default ModalHeader;