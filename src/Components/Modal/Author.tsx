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
    font-weight:600;
    font-size:16px;
    text-decoration:none;
    &:hover{
        color:#e6e6e6;
    }
`
const Insta = styled.a`
    text-decoration:none;
    color:#fff;
    font-size:12px;
    transition: color .3s;

    &:hover{
        color:#e6e6e6;
    }
`
const Author = ({...props}) => {
    console.log(props.modalSrc.profileLink.slice(12))
    return(
        <AuthorDiv>
            <AvatarDiv>
                <Avatar src={props.modalSrc.profileImg} />
                <NameDiv>
                    <AuthorName href={`http://${props.modalSrc.profileLink.slice(12).replace("users/", "@")}`} target="_blank">{props.modalSrc.name}</AuthorName>
                    <Insta href={`https://instagram.com/${props.modalSrc.profileLink.slice(31)}`} target="_blank">@{props.modalSrc.insta}</Insta>
                </NameDiv>
            </AvatarDiv>

        </AuthorDiv>
    )
}

export default Author;