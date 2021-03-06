import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`

position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background:rgba(236, 236, 236, .95);
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
color: #fff;
`
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
export const SidebarWrapper = styled.div`
color: #fff;
`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat (6, 80px);
text-align: center;
padding:1px;
max-height:250px;
// border: 5px solid #000000;


@media screen and (max-width: 768px){
    grid-template-rows: repeat(6, 60px);
}
`
export const SidebarLink = styled(LinkS)`
// border: 5px solid #000000;
font-family: Proxima Nova;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: black;
cursor: pointer;

&:hover{
    color: #C8202F;
    transition: 0.2s ease-in-out;   
}
`
export const SidebarButtonWrap = styled.div`
font-family: sans-serif;
display: flex;
justify-content: center;
padding-bottom:10px;
`
export const SidebarRoutes = styled(LinkR)`
border-radius: 5px;
background: #C8202F;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`
export const SidebarR = styled.div`
border-radius: 5px;
background: #C8202F;
white-space: nowrap;
margin-top:10px;
padding: 10px 20px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`