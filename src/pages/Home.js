import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
        <Hero> 
            <Banner title="Explore with confidence" subtitle="Elite company dedicated to the sale and rental of residential, commercial and industrial properties.">
                <Link to='/properties' className="btn-primary">
                    Our Properties
                </Link>
            </Banner>
        </Hero>
        <Services/>
        </>
    );
}

export default Home
