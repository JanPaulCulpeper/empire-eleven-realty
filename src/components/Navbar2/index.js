import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../images/logoEER1.svg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavButton,
  NavButtonLink,

} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome} >
            <img src={logo} className="navbar-logo" alt="logo"/>
          </NavLogo>
          {/* <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon> */}
          {/* <NavMenu>
          <NavItem>
              <NavLinks
                to="featured-properties"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Featured Properties
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="reviews"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Testimonials
              </NavLinks>
            </NavItem>
          </NavMenu> */}
          {/* <NavButton>
            <NavLinks to="footer">Contact</NavLinks>
          </NavButton> */}
        </NavbarContainer>
        <NavButton>
            <NavButtonLink>
            <a className="NavButtCall" href="tel:787-607-6686">Call us</a>
            </NavButtonLink>
            </NavButton>
            <NavButton>
            <NavButtonLink>
            <a className="NavButtCall" href="mailto: bienesraices@empireelevenrealty.com">Email us</a>
            </NavButtonLink>
            </NavButton>
      </Nav>
    </IconContext.Provider>
  );
};
export default Navbar;
