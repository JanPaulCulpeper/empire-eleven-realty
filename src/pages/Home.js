import React, {useState} from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import { Link } from 'react-router-dom'
import FeatureProperties from '../components/FeatureProperties'
import SearchContainer from '../components/SearchContainer'
import About from '../components/About/index'
import {
    homeObjOne
  } from "../components/About/data";
import Navbar from '../components/Navbar/index'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
        <Navbar toggle={toggle} />
         <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Hero>
                <Banner title="Empire Eleven Realty" subtitle="Elite company dedicated to the purchase, sale, and rental of residential, and commercial properties.">
                <SearchContainer className="search-container1">
               
               </SearchContainer>
                    <Link to='/properties' className="btn-primary">
                        Search
                    </Link>
                </Banner>
            </Hero>
                <FeatureProperties />
                <Services />
                <About {...homeObjOne} id="about"/>
                {/* <Reviews className='reviews' title="Reviews" id="reviews" /> */}
            </>
            );
};
export default Home
