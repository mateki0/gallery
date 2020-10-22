import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import ImagesWrapper from './styled/ImagesWrapper';
import SingleImage from './styled/SingleImage';
import SingleImageWrapper from './styled/SingleImageWrapper';
import NoPhotosWrapper from './styled/NoPhotosWrapper';
import LinkToProfile from './styled/LinkToProfile';
import NoPermissionError from './styled/NoPermissionError';

const OtherUserImgs = ({ author } : { author?:string }) => {
    const [data, setData] = useState<Array<any>>([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchData = useCallback(async(url:string)=>{
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
    },[])
    useEffect(()=>{
        fetchData(author +'/photos?per_page=21');
    },[author, fetchData])
    
    if(!isLoading && data.length > 0 && author){
    return(
        <>
        <ImagesWrapper>
            {data.map((photo:{urls:{small:string, full:string}},index:number) => (           
            <SingleImageWrapper key={index}>
                <a href={photo.urls.full} target="_blank" rel='noopener noreferrer'>
                    <SingleImage src={photo.urls.small} />
                </a>
            </SingleImageWrapper>
        ))}
        </ImagesWrapper>
        <NoPhotosWrapper>
            <LinkToProfile 
                href={`http://${author.slice(12).replace("users/", "@")}?utm_source=myown-gallery&utm_medium=referral`}
                >
                See all photos by this author on official unsplash site.
                </LinkToProfile>
        </NoPhotosWrapper>
        </>
        )
            }
    if(isLoading && data.length === 0 && author){
        return(
            <NoPhotosWrapper>
                <NoPermissionError>We don't have user permission to display more pictures.</NoPermissionError>  <br/> 
                <LinkToProfile 
                    href={`https://instagram.com/${author.slice(31)}`}
                    >
                    Check more photos on instagram profile 
                    </LinkToProfile> 
            </NoPhotosWrapper>
        )
    }
    return(
        <div>Loading...</div>
    )
}
export default OtherUserImgs;