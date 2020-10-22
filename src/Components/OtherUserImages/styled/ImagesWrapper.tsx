import styled from 'styled-components'
import device from '../../MediaQuerySizes'
const ImagesWrapper = styled.div`
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

export default ImagesWrapper;