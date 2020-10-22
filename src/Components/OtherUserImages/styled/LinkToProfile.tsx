import styled from 'styled-components';
import device from '../../MediaQuerySizes';

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
export default LinkToProfile;