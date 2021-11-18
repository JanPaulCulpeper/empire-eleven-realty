
import React, {useState} from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import PropertiesContainer from '../components/PropertiesContainer'
import Navbar2 from '../components/Navbar2/index';
const Properties = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>

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
