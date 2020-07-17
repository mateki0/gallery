import React from 'react';
import styled, {css} from 'styled-components';
import {ResizeFullScreen} from '@styled-icons/entypo';
import OtherUserImgs from './OtherUserImgs';
const ModalDiv = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction:column;
`
const Resize = styled(ResizeFullScreen)`
    width:22px;
    height:22px;
    position:absolute;
    opacity:0;
    top:12px;
    right:16px;
    color:#fff;
    transition:opacity .5s;
`
const ModalImg = styled.img`
vertical-align:middle;
width:auto;

cursor:zoom-in;
height:80vh;
${(props:{zoomed:boolean; wid:number}) => props.zoomed && css`
    height:auto;
    width:${props.wid}px;
    max-width:100%;
    cursor:zoom-out;
`}
`
const ModalImgDiv = styled.div`
    margin: 20px auto ;    
    width:auto;
    &:hover ${Resize}{
        opacity:1;
    }
    position:relative;
`
const OtherTitle = styled.h2`
    margin:20px auto 40px auto ;
    color:#fff;
`
const ModalComponent = ({...props}) => {
    
    return(
        <ModalDiv >
            
            <ModalImgDiv onClick={props.zoomIn} >
                <ModalImg zoomed={props.zoomed} src={props.modalSrc.regular} wid={props.modalSrc.width} />
                <Resize/>
            </ModalImgDiv>
            <OtherTitle>Other Pictures Made By This Author available on Unsplash</OtherTitle>
            <OtherUserImgs author={props.modalSrc.profileLink}/>
        </ModalDiv>
        
    )
}

export default ModalComponent;