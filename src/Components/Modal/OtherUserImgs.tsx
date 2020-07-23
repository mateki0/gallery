import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import device from '../MediaQuerySizes'
const GalleryDiv = styled.div`
    margin:0 auto;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    column-gap:10px;
    grid-gap:10px;
    
    @media ${device.mobileS}{
        column-gap:5px;
        grid-gap:5px;
    }
    @media ${device.tablet}{
        column-gap:10px;
        grid-gap:10px;
    }
`
const StyledImg = styled.img`
    box-sizing:border-box;
    filter: brightness(100%);
    object-fit: cover;
    width:100%;
    display:inline-block;
    margin:5px 0;
    transition:filter .5s;
    &:hover{
        cursor:pointer;
        filter: brightness(75%);
    }
    
    @media ${device.mobileS}{
        height:80px;
    }
    @media ${device.mobileL}{
        height:100px;
    }

    @media ${device.tablet}{
        height:120px;
    }
    @media ${device.laptop}{
        height:180px
    }
    @media ${device.desktop}{
        height:200px;
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
    @media ${device.mobileS}{
        font-size:14px;

    }
    @media ${device.tablet}{
        font-size:16px;
    }
    @media ${device.laptop}{
        font-size:20px;
    }
    @media ${device.desktop}{
        font-size:22px;
    }
`
const NoPhotos = styled.div`
    margin:20px auto 0 auto;
    text-align:center;
`
const NoPermissions = styled.span`
    color:#fff;
    @media ${device.mobileS}{
        font-size:14px;

    }
    @media ${device.tablet}{
        font-size:16px;
    }
    @media ${device.laptop}{
        font-size:18px;
    }
    @media ${device.desktop}{
        font-size:22px;
    }
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
                <a href={photo.urls.full} target="_blank" rel='noopener noreferrer'>
                    <StyledImg src={photo.urls.small} />
                </a>
            </ImgDiv>
        ))}
        </GalleryDiv>
        <NoPhotos>
            <LinkToProfile href={`http://${props.author.slice(12).replace("users/", "@")}?utm_source=myown-gallery&utm_medium=referral`}>See all photos by this author on official unsplash site.</LinkToProfile>
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