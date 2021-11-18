import React, {useState} from 'react'
import './App.css';
import Home from './pages/Home'
import SingleProperty from './pages/SingleProperty'
import Error from './pages/Error'
import Properties from './pages/Properties';
import { Route, Switch} from 'react-router-dom'
import Foo from './components/Footer/index'
import WhatsApp from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return <>
  {/* <Navbar2 toggle={toggle} /> */}
  {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
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
