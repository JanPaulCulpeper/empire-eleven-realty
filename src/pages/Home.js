
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import {Link} from 'react-router-dom'
import FeatureProperties from '../components/FeatureProperties'
import PropertiesContainer from '../components/PropertiesContainer'
import About from '../components/About'
import Foo from '../components/Footer/index'
import Reviews from '../components/Reviews/Reviews'
import SearchContainer from '../components/SearchContainer'

const Home = () => {
    return (
        <>
        
        <Hero> 
            <Banner title="Explore with confidence" subtitle="Elite company dedicated to the sale and rental of residential, commercial and industrial properties.">
                
                <Link to='/properties' className="btn-primary">
                    Properties
                </Link>
            </Banner>
            
        </Hero>
        <SearchContainer />
            <Link to='/properties' className="btn-primary">
                    Search
            </Link>
            
        <FeatureProperties/>
        <Services/>
        <About className='about' title="About" id="about"/>
        <Reviews className='reviews' title="Reviews" id="reviews"/>
        <Foo />
        </>
    );
};

export default Home
