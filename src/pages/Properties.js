import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import PropertiesContainer from '../components/PropertiesContainer'
const Properties = () => {
    return (
        <>
            <Hero hero="propertiesHero"> 
                <Banner title="Our Properties">
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
