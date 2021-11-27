
import React, {useState} from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import PropertiesContainer from '../components/PropertiesContainer'
import Navbar2 from '../components/Navbar2/index';
import { Helmet } from 'react-helmet'
const Properties = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
           <Helmet>
  <title>Search Properties </title>
    <meta name="description" content="Search for the to purchase, sale, and rental of residential, and commercial properties in Puerto Rico"/>
  </Helmet>  
         <Navbar2 toggle={toggle} />

          {/* <Sidebar2 isOpen={isOpen} toggle={toggle}/> */}
            <Hero hero="propertiesHero"> 
                <Banner title="Let's make your dream come true">
                    <Link to='/' className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <PropertiesContainer/>
        </>
    );
};

export default Properties;
