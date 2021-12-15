import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarButtonWrap,
    SidebarRoutes,
    SidebarR
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="featured-properties" onClick={toggle}>Featured Properties</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    {/* <SidebarLink to="reviews" onClick={toggle}>Testimonials</SidebarLink> */}
                    {/* <SidebarLink to="footer" onClick={toggle}>Contact</SidebarLink> */}
                </SidebarMenu>
                <SidebarButtonWrap>
                    <SidebarRoutes to="/properties">Properties</SidebarRoutes>
                </SidebarButtonWrap>
                <SidebarButtonWrap>
                    <SidebarR>
                    <a className="NavButtCall" href="tel:787-607-6686">Call us</a>

                    </SidebarR>
                </SidebarButtonWrap>
                <SidebarButtonWrap>
                <SidebarR>
                        <a className="NavButtCall" href="mailto: bienesraices@empireelevenrealty.com">Email us</a>
                    </SidebarR>
                </SidebarButtonWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
};

export default Sidebar;
