import React from 'react';
import styled from 'styled-components';
import Author from './Author';

const Header = styled.div`
    display:flex;
    justify-content:center;
    margin-top:10px;
`
const ModalHeader = ({...props}) => {
    return(
        <Header>
            <Author modalSrc={props.modalSrc} />
        </Header>
    )
}
export default ModalHeader;