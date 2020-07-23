import React, {useState,useEffect, useRef} from 'react';
import styled, {css} from 'styled-components';
import {ChevronDown} from '@styled-icons/boxicons-solid';
import axios from 'axios';
import fileDownload from 'js-file-download'
const Download = styled.div`
    position:relative;
    margin:0;
    display:flex;
    flex-direction:column;
    align-content:flex-end;
    
`
const OpenDrop = styled.button`
    color:#fff;
    padding:5px 15px;
    font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
    border:1px solid #e0e0e0;
    border-radius:5px;
    background:#573A03;
    &:hover{
        cursor:pointer;
        color:#e6e6e6;
        border:1px solid #000;
    }
    transition: all .5s;
`

const SizeName = styled.span`
    transition: color .5s;
`
const DropA = styled.a`
    display:flex;
    justify-content:flex-end;
    color:#fff;
    font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
    padding:10px 12px;
    &:hover{
        cursor:pointer
    }
    &:hover ${SizeName}{
        color:#bfbfbf;
    }
    :last-of-type{
        border-top:1px solid #e0e0e0;
    }
`

const Size = styled.span`
    padding:0 0 0 6px;
    color:#bfbfbf;
    font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
`
const DownloadDropdown = styled.div`
    top:35px;
    right:0;
    position:absolute;
    min-width:150px;
    width:13vw;
    background-color:#000;
    border-radius:5px;
    z-index:2;
    visibility:hidden;
    opacity:0;
    padding:10px;
    ${(props:{isOpen:boolean}) => props.isOpen && css`
        opacity:1;
        visibility:visible;
`}
transition: all .5s;
`
const ButtonDiv = styled.div`
    display:flex;
    justify-content:flex-end;
    

`
const StyledChevron = styled(ChevronDown)<{isOpen:boolean}>`

    border:${({isOpen}) =>
        (isOpen === true && '1px solid #000') ||
        (isOpen === false && '1px solid #e0e0e0')
    };
    width:22px;
    color:${({isOpen}) =>
        (isOpen === true && '#e6e6e6') ||
        (isOpen === false && '#e6e6e6')
    };
    padding:0 6px;
    background:#573A03;
    border-radius:5px;
    &:hover{
        cursor:pointer;
        color:#e6e6e6;
        border:1px solid #000;
    }
    transition: all .5s;
`
interface IUrl{
    url:string
}
const DownloadComponent = ({...props}) =>{
    const [isOpen, setIsOpen] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState<IUrl>({url:''});
    const openChev = useRef<SVGSVGElement>(null!);
    const handleClickOutside = (e: { target: any; currentTarget:any }) => {
        if(openChev && openChev.current.contains(e.target)) return;
            setIsOpen(false)
    }
        
    const openDropdown = () => {
        console.log('works')
        setIsOpen(isOpen ? false : true)
    };
        
    
    useEffect(() => {
        
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },[]);
    
    

    // useEffect(()=>{
    //     const handleDownload = async(url:string) => {
            
            
    //             let response = await axios({
    //                 method:'GET',
    //                 url:url,
    //                 headers:{
    //                     "Accept-version": 'v1',
    //                     'Content-Type':'image/png',
    //                     "Content-Disposition": 'attachment; filename="picture.png"',
    //                     "Authorization":`Client-ID sWGhz-V16829nOeWD-B81tBClvHIJ2emsOvUM4IzzQU`,
                        
    //                 },
    //                 responseType:'blob'
    //             })
                
                
           
    //     }
    //     handleDownload(props.modalSrc.link)
    //     const blob = response.blob()
        
    // },[props.modalSrc.link])
    
        const downloadFile = (url:string) => {
            axios({
                method:'GET',
                url:url,
                headers:{
                    'Accept-version': 'v1',
                    // 'Content-Type':'image/png',
                    // "Content-Disposition": 'attachment; filename="picture.png"',
                    'Authorization':`Client-ID sWGhz-V16829nOeWD-B81tBClvHIJ2emsOvUM4IzzQU`,
                    'responseType':'blob',
                },
                
            }).then((response) => {
                console.log(response.data)
                const url = window.URL.createObjectURL(new Blob([response.data.url]))
                console.log(url)
                const element = document.createElement('a');
                element.href =  url
                element.setAttribute('download','image.pdf');
                document.body.appendChild(element)
                element.click();
            })
        }
    return (
        <Download >
            <ButtonDiv>
                <OpenDrop>Download</OpenDrop>
                <StyledChevron onClick={() => openDropdown()} isOpen={isOpen} ref={openChev}/>
            </ButtonDiv>
            <DownloadDropdown isOpen={isOpen} >
                <DropA >
                    <SizeName >
                        Small
                    </SizeName>
                    <Size>
                        (640 Width)
                    </Size>
                </DropA>
                <DropA>
                    <SizeName>
                        Medium
                    </SizeName>
                    <Size>
                        (1920 Width)
                    </Size>
                </DropA>
                <DropA>
                    <SizeName>
                        Large
                    </SizeName>
                    <Size>
                        (2400 Width)
                    </Size>
                </DropA>
                <DropA>
                    <SizeName>
                        Original Size
                    </SizeName>    
                    <Size>
                        ({props.modalSrc.width}x{props.modalSrc.height})
                    </Size>
                </DropA>
            </DownloadDropdown>
        </Download>
    )
    }
    export default DownloadComponent;