import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <Hero> 
            <Banner title="Explore with confidence" subtitle="">
                <Link to='/properties' className="btn-primary">
                    Our Properties
                </Link>
            </Banner>
        </Hero>
    );
}

export default Home
