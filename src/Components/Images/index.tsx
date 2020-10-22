import React,{useState, useEffect} from "react";
import ModalComponent from '../ModalComponent';
import GalleryWrapper from './styled/GalleryWrapper';
import AuthorSpan from './styled/AuthorSpan' ;
import AuthorInfoWrapper from './styled/AuthorInfoWrapper';
import ImgWrapper from './styled/ImgWrapper';
import StyledImg from './styled/StyledImg';
import StyledModal from './styled/StyledModal' ;
import {IPhoto, IHandleProps} from '../types'
import ModalHeader from "../ModalHeader";


const Images = ({data} : {data:IPhoto[]}) => {
    const [show,setShow] = useState(false);
    const [zoomed, setZoomed] = useState(false)
    const [modalSrc, setModalSrc] = useState<IHandleProps >();
    useEffect(() =>{
        StyledModal.setAppElement('body')
        setShow(false)
    },[])
    const handleClose = () => {
        setShow(false);
        document.body.style.overflow = "visible";
        setZoomed(false);
    };
    const handleShow = (data: IHandleProps) => {
        setModalSrc(data)
        setShow(true);
        document.body.style.overflow = "hidden";
    };
    const zoomIn = () => {
        setZoomed(zoomed ? false : true);
    }
    return(
        <GalleryWrapper>
            {data.map((photo, index)=>{
                return (
                    <ImgWrapper 
                        onClick={()=>handleShow({
                            regular:photo.urls.regular, 
                            width:photo.width, 
                            height:photo.height, 
                            link:photo.links.download_location, 
                            description:photo.description, 
                            alt_description:photo.alt_description,
                            profileImg:photo.user.profile_image.small,
                            name:photo.user.name,
                            insta:photo.user.instagram_username,
                            profileLink:photo.user.links.self,
                        })} 
                        key={index}>
                        <StyledImg src={photo.urls.small} />
                        <AuthorInfoWrapper>
                            <AuthorSpan>{photo.user.name}</AuthorSpan>
                        </AuthorInfoWrapper>
                    </ImgWrapper>
                );
            })}
        
        <StyledModal 
            isOpen={show} 
            onRequestClose={handleClose}
            contentLabel="Example modal"
        >   
        {modalSrc ? (
            <>
            <ModalHeader modalSrc={modalSrc}/>
            <ModalComponent zoomed={zoomed} modalSrc={modalSrc} zoomIn={zoomIn} />
            </>
            ) : "No Data"}
        </StyledModal>
        
    </GalleryWrapper>
    )
}

export default Images;