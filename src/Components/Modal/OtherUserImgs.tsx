import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';

const GalleryDiv = styled.div`
    margin:0 auto;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    column-gap:10px;
    grid-gap:10px;
    
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
        cursor:pointer;
        filter: brightness(75%);
    }
    
`
const ImgDiv = styled.div`
    position:relative;
`
const LinkToProfile = styled.a`
    font-size:22px;
    color:#fff;
    font-weight:bold;
    text-decoration:none;
    text-align:center;

    &:hover{
        cursor:pointer;
        text-decoration:underline;
        color:#e5e5e5;
    }

    transition:color .5s;
`
const NoPhotos = styled.div`
    margin:0 auto;
    text-align:center;
`
const NoPermissions = styled.span`
    font-size:22px;
    color:#fff;
`
const OtherUserImgs = ({...props}) => {
    const [data, setData] = useState<Array<any>>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        
        
        const fetchData = async(url:string)=>{
            try{
              const response = await axios({
                method:'GET',
                url:url,
                headers:{
                    "Accept-version": 'v1',
                    "Authorization":`Client-ID ${process.env.REACT_APP_API_KEY}`,
                }});
                console.log(response.data)
                setData(response.data);
                setIsLoading(false)
            }catch(error){
              console.log(error)
            }
          }
            fetchData(props.author +'/photos?per_page=21');
    },[props.author])
    
    if(!isLoading && data.length > 0){
    return(
        <>
        <GalleryDiv>
            {data.map((photo:{urls:{small:string, full:string}},index:number) => (           
            <ImgDiv key={index}>
                <a href={photo.urls.full} target="_blank">
                    <StyledImg src={photo.urls.small} />
                </a>
            </ImgDiv>
        ))}
        
        </GalleryDiv>
        <NoPhotos>
            <LinkToProfile href={`http://${props.author.slice(12).replace("users/", "@")}`}>See all photos by this author on official unsplash site.</LinkToProfile>
        </NoPhotos>
        </>
    )
            }
    if(isLoading && data.length === 0){
        return(
            <NoPhotos>
               <NoPermissions>We don't have user permission to display more pictures.</NoPermissions>  <br/> <LinkToProfile href={`https://instagram.com/${props.author.slice(31)}`} >Check more photos on instagram profile </LinkToProfile> 
            </NoPhotos>
        )
    }
    return(
        <div>Loading...</div>
    )
}

export default OtherUserImgs;

// fetch other images from specific user
// load more imgs when scrolling