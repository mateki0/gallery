import device from '../../MediaQuerySizes'
import styled from 'styled-components';
import AuthorInfoWrapper from './AuthorInfoWrapper';

const ImgWrapper = styled.div`
    height:200px;
    flex:1 1 350px;
    position:relative;
    &:hover ${AuthorInfoWrapper}{
        display:block;
    }
    @media ${device.mobileS}{
        height:100px;
    }
    @media ${device.mobileL}{
        height:120px;
    }
    @media ${device.tablet}{
        height:150px;
    }
    @media ${device.laptop}{
        height:220px
    }
    @media ${device.desktop}{
        height:250px;
    }
`
export default ImgWrapper;