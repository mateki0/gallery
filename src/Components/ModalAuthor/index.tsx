import React from 'react';
import AuthorName from '../ModalAuthor/styled/AuthorName';
import AuthorWrapper from '../ModalAuthor/styled/AuthorWrapper';
import AvatarImg from '../ModalAuthor/styled/AvatarImg';
import AvatarImgWrapper from '../ModalAuthor/styled/AvatarImgWrapper';
import InstaLink from '../ModalAuthor/styled/InstaLink';
import NameWrapper from '../ModalAuthor/styled/NameWrapper';

interface AuthorProps {
  profileImg: string;
  profileLink: string;
  insta: string;
  name: string;
}

const Author = ({ profileImg, profileLink, insta, name }: AuthorProps) => {
  return (
    <AuthorWrapper>
      <AvatarImgWrapper>
        <AvatarImg src={profileImg} />
        <NameWrapper>
          <AuthorName
            href={`http://${profileLink
              .slice(12)
              .replace('users/', '@')}?utm_source=myown-gallery&utm_medium=referral`}
            target="_blank"
          >
            {name}
          </AuthorName>
          <InstaLink
            insta={insta}
            href={`https://instagram.com/${profileLink.slice(31)}`}
            target="_blank"
          >
            @{insta}
          </InstaLink>
        </NameWrapper>
      </AvatarImgWrapper>
    </AuthorWrapper>
  );
};

export default Author;
