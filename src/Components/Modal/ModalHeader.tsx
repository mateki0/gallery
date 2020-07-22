import React from 'react';
import styled from 'styled-components';
import DownloadComponent from './DownloadComponent'
import Author from './Author';

const Header = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:10px;
`

const ModalHeader = ({...props}) => {
    
    return(
        <Header>
            <Author modalSrc={props.modalSrc} />
            <DownloadComponent modalSrc={props.modalSrc}/>
        </Header>
    )
}

export default ModalHeader;