import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg';

export default function Property({property}) {
    // eslint-disable-next-line
const{name,sp,images,price,status} = property;

    return (
        <article className="property">
        <div className="img-container"> 
        <img src={images[0] || defaultImg} alt="single property"/>
        <div className="price-top">
            <h6>${price}</h6>
            <p> per night</p>
            </div>
{/* //Add status to top-left of property listing
         {/* <div className="status-top">
            {/* <h6>{status}</h6> */}
            {/* </div> */} 

{/*slug = sp */}
        <Link to={`/properties/${sp}`} 
        className="btn-primary property-link ">
          Features
        </Link>
        </div>
        </article>
    );
    

}
