import React,{useState, useEffect, useRef} from "react";
import styled from 'styled-components';
import Modal from 'react-modal';
import ModalComponent from '../Modal/ModalComponent';
import ModalHeader from "../Modal/ModalHeader";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

const GalleryDiv = styled.div`
    margin:0 auto;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    column-gap:10px;
    grid-gap:10px;
`
const AuthorDiv = styled.div`
display:none;
position:absolute;
bottom:15px;
left:16px;
`
const StyledImg = styled.img`
    box-sizing:border-box;
    filter: brightness(100%);
    object-fit: cover;
    width:100%;
    height:200px;
    display:inline-block;
    margin:5px 0;
    transition:filter .5s;
    &:hover{
        cursor:zoom-in;
        filter: brightness(75%);
    }
    
`
const ImgDiv = styled.div`
    height:200px;
    flex:1 1 350px;
    position:relative;
    &:hover ${AuthorDiv}{
        display:block;
    }
    
`

const Author = styled.span`
font-size:18px;
font-weight:600;
    color:#fff
`


const StyledModal= styled(Modal)`
    margin:20px auto;
    display:flex;
    flex-direction:column;
    width:80vw;
    padding: 0 20px 20px 20px;
    background-color:#DDAA4B;
    outline:none;
    max-height:90vh;
    overflow-y:auto;
`

interface ISrc{
    regular?:string, 
    width?:number, 
    height?:number, 
    link?:string, 
    description?:string, 
    alt_description?:string,
    profileImg?:string,
    name?:string,
    insta?:string,
    profileLink?:string,
}
const Images = () => {
    const [show,setShow] = useState(false);
    const [zoomed, setZoomed] = useState(false)
    const [modalSrc, setModalSrc] = useState<ISrc>({});
    
    const [data, setData] = useState <Array<any>>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchUrl, setFetchUrl] = useState<string>('https://api.unsplash.com/photos?per_page=30&page=1');
    const [hasMore, setHasMore] = useState(true);
    const [page,setPage] = useState<number>(1);
    useEffect(()=>{
        Modal.setAppElement('body')
        const fetchData = async(url:string)=>{
        try{
            const response = await axios({
            method:'GET',
            url:url,
            headers:{
                "Accept-version": 'v1',
                "Authorization":`Client-ID ${process.env.REACT_APP_API_KEY}`,
            }});
            if(page === 1){
                setData(response.data);
            } else {
                setData(data.concat(response.data))
                
            }
            setIsLoading(false);
        }catch(error){
            console.log(error)
        }
        }
        fetchData(fetchUrl);
    },[fetchUrl, page])
   
    useEffect(() =>{
        setShow(false)
    },[])
    const handleClose = () => {
        setShow(false);
        setZoomed(false);
    };
    const handleShow = (data:ISrc) => {
        setModalSrc(data)
        setShow(true)
    };
        
    const zoomIn = () => {
        setZoomed(zoomed ? false : true);
    }
    const incrementPage = () => {
        setPage(page+1)
    }
    const fetchMoreData = () => {
        incrementPage();
        setFetchUrl(`https://api.unsplash.com/photos?per_page=30&page=${page+1}`)
        
        if(data.length/page+1 < 30){
            setHasMore(false)
        }
        }
    
    return(
    <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        >
        <GalleryDiv >
            {data.map((photo:{
                id:string,
                user:{
                    name:string,
                    instagram_username:string,
                    profile_image:{
                        small:string
                    },
                    links:{
                        self:string;
                    }
                },
                height:number,
                width:number,
                urls:{
                    full:string,
                    small:string,
                    regular:string
                },
                links:{
                    download_location:string
                },
                description: string | undefined,
                alt_description:  string | undefined,
            },index:number)=>(
                    
                        <ImgDiv onClick={()=>handleShow(
                            {
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
                            
                            <StyledImg src={photo.urls.small}/>
                            <AuthorDiv>
                            <Author>{photo.user.name}</Author>
                            </AuthorDiv>
                        </ImgDiv>
                        
                    
            ))}
        
        <StyledModal 
            isOpen={show} 
            onRequestClose={handleClose}
            contentLabel="Example modal"
            
        >   
            <ModalHeader modalSrc={modalSrc}/>
            <ModalComponent zoomed={zoomed} modalSrc={modalSrc} zoomIn={zoomIn}/>
            
        </StyledModal>
     </GalleryDiv>
     </InfiniteScroll>
    )
}

export default Images;