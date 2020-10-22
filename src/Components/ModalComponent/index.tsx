import React from 'react';
import OtherUserImgs from '../OtherUserImages';
import { IHandleProps } from '../types';
import ModalImg from './styled/ModalImg';
import ModalImgWrapper from './styled/ModalImgWrapper';
import ModalWrapper from './styled/ModalWrapper';
import OtherImgsTitle from './styled/OtherImgsTitle';
import ResizeIcon from './styled/ResizeIcon';
import UnsplashLink from './styled/UnsplashLink';


interface IModal{
    zoomed?:boolean;
    zoomIn?: () => void;
    modalSrc:IHandleProps ;
    
}

const ModalComponent = ({ modalSrc, zoomed, zoomIn } :IModal ) => {
    
    const {regular, width, profileLink} = modalSrc;
    return(
        <ModalWrapper >
            <ModalImgWrapper onClick={zoomIn}>
                <ModalImg zoomed={zoomed} src={regular} width={width} />
                <ResizeIcon/>
            </ModalImgWrapper>
            <OtherImgsTitle>Other Pictures Made By This Author available on 
                <UnsplashLink href="https://unsplash.com/?utm_source=myown-gallery&utm_medium=referral" target="_blank">Unsplash:</UnsplashLink>
                </OtherImgsTitle>
            <OtherUserImgs author={profileLink}/>
        </ModalWrapper>
    )
    
}

export default ModalComponent;