import styled from 'styled-components';
import device from '../../MediaQuerySizes';
const OtherImgsTitle = styled.span`
    font-size: 24px;
    text-align:center;
    font-weight:600;
    margin:20px auto 40px auto ;
    color:#fff;
    @media ${device.mobileS}{
        font-size:14px;
    }
    @media ${device.tablet}{
        font-size:18px
    }
    @media ${device.laptop}{
        font-size:24px;
    }
`

export default OtherImgsTitle