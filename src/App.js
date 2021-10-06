import React, {useState} from 'react'
import './App.css';
import Home from './pages/Home'
import SingleProperty from './pages/SingleProperty'
import Error from './pages/Error'
import Properties from './pages/Properties';
import Navbar from './components/Navbar/index';
import { Route, Switch} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Foo from './components/Footer/index'
import WhatsApp from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return <>
  <Navbar toggle={toggle} />
  <Sidebar isOpen={isOpen} toggle={toggle}/>
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/properties/" component={Properties}/>
  <Route exact path="/properties/:sp" component={SingleProperty}/>
  <Route component={Error} />
  </Switch>
  <div className="whatsapp">
  <WhatsApp message="Hello! Feel free to reach out! " companyName="Empire Eleven Realty" phoneNumber='' />
  </div>
  <Foo />
  </>;
}

export default App;
