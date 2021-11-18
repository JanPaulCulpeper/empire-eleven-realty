import React, { Component } from 'react'
import defaultBcg from '../images/room-1.svg'
import { Link } from 'react-router-dom'
import { PropertyContext } from '../context'
import Navbar2 from '../components/Navbar2/index';

const commaNumber = require('comma-number')



export default class SingleProperty extends Component {

  


    constructor(props)
    {
        super(props);
        this.state = {
            sp:this.props.match.params.sp,
            defaultBcg
        };
    }
    static contextType = PropertyContext;
    render() {
        const {getProperty} = this.context;
        const property = getProperty(this.state.sp);
        if(!property){
            return ( <div className = "error">
                <h3>No such property could be found...</h3>
                <Link to = '/properties' className="btn-primary">
                back to properties
                </Link>
            </div>
            );
        }
        const {name,
            description,
            size,
            price,
            extras,
            images} = property;


            const [...defaultImages] = images;
        
            return (
              <>


              
         <Navbar2 />
                <div className="backToProperties">
                 
                    <Link to="/properties" className="btn-primary">
                      back to properties
                    </Link>
                 </div>
              
                <section className="single-property">
                  <div className="single-property-images">
                    {defaultImages.map((item, index) => (
                      <img key={index} src={item} alt={name} />
                    ))}
                  </div>
                  <div className="single-property-info">
                    <article className="desc">
                      <h3>details</h3>
                      <p>{description}</p>
                    </article>
                    <article className="info">
                      <h3>info</h3>
                      <h6>• price : ${commaNumber(price)}</h6>
                      <h6>• size : {commaNumber(size)} SQFT</h6>
                  
                    </article>
                  </div>
                </section>
                <section className="property-extras">
                  <h3>extras </h3>
                  <ul className="extras">
                    {extras.map((item, index) => (
                      <li  key={index}>• {item}</li>
                    ))}
                  </ul>
                </section>
              </>
            );
          }
        }
