import React from 'react';
import styled from 'styled-components';

const AuthorDiv = styled.div`
    display:flex;
`
const Avatar = styled.img`
    width:100%;
    height:100%;
    border-radius:50%;
`
const AvatarDiv = styled.div`
    display:flex;
    
`
const NameDiv = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:10px;
`
const AuthorName = styled.a`
    color:#fff;
    width:100%;
    font-weight:600;
    font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
    text-decoration:none;
    &:hover{
        color:#e6e6e6;
    }
`
interface InstaProps{
    insta:string
}
const Insta = styled.a<InstaProps>`
    text-decoration:none;
    color:#fff;
    font-size: calc(8px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
    transition: color .3s;
    &:hover{
        color:#e6e6e6;
    }
    display:${props=>{
        if(props.insta === null){
            return 'none'
        } else{
            return 'block'
        }
    }}
`
const Author = ({...props}) => {
    console.log(props.modalSrc.profileLink.slice(31))
    console.log(props.modalSrc)
    return(
        <AuthorDiv>
            <AvatarDiv>
                <Avatar src={props.modalSrc.profileImg} />
                <NameDiv>
                    <AuthorName href={`http://${props.modalSrc.profileLink.slice(12).replace("users/", "@")}?utm_source=myown-gallery&utm_medium=referral`} target="_blank">{props.modalSrc.name}</AuthorName>
                    <Insta insta={props.modalSrc.insta} href={`https://instagram.com/${props.modalSrc.profileLink.slice(31)}`} target="_blank">@{props.modalSrc.insta}</Insta>
                
                </NameDiv>
            </AvatarDiv>
        </AuthorDiv>
    )
}

export default Author;