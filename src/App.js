import React from 'react'
import './App.css';
import Home from './pages/Home'
import SingleProperty from './pages/SingleProperty'
import Error from './pages/Error'
import Properties from './pages/Properties';
import { Route, Switch} from 'react-router-dom'
import Foo from './components/Footer/index'
import WhatsApp from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import { Helmet } from 'react-helmet';

function App() {

  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return <>
  {/* <Navbar2 toggle={toggle} /> */}
  {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
<Helmet>
  <title>Empire Eleven Realty  </title>
    <meta name="description" content="Empire Eleven Realty, Elite company dedicated to the purchase, sale, and rental of residential, and commercial properties in Puerto Rico"/>
    <meta name="keywords" content="Sell properties in Puerto Rico, Buy properties in Puerto Rico, Rent properties in Puerto Rico, Invest in properties in Puerto Rico, Search for properties in Puerto Rico"/>
  </Helmet>  
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/properties/" component={Properties}/>
  <Route exact path="/properties/:sp" component={SingleProperty}/>
  <Route component={Error} />
  </Switch>
  <div className="whatsapp">
  <WhatsApp message="Let's make your dream come true! " companyName="Empire Eleven Realty" phoneNumber='+17876076686' textReplyTime='Typically replies within 30 minutes'/>
  </div>
  <Foo />
  </>;
}

export default App;
