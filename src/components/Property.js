import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa'
import {commaNumber} from "comma-number"

const Property = memo(({ property }) => {
  const { name, sp, images, price, bedRooms, bathRooms, size , status } = property;

  const commaNumber = require('comma-number')


  return (
    <article className="property">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single property" />
        <div className="price-top">
          <h6>{status}</h6>
        </div>
        <Link to={`/properties/${sp}`} className="btn-primary property-link">
          features
        </Link>
      </div>
      <p className="property-info">{name}</p>
      <div className="columns">
        <div className="price">
          <h6>Price: ${commaNumber(price)}</h6>
        </div>
        <div className="column-rooms">
          <div className="room-count">
            <h6>{bedRooms}</h6>
          </div>
          <div className="room-icon">
            <h6><FaBed /></h6>
          </div>
        </div>
        <div className="column-bath">
          <div className="bath-count">
            <h6>{bathRooms} </h6>
          </div>
          <div className="bath-icon">
            <h6><FaBath /></h6>
          </div>
        </div>
        <div className="column-sqft">
          <div className="sqft-count">
            <h6>{size}  </h6>
          </div>
          <div className="sqft-icon">
            <h6><FaRulerCombined /></h6>
          </div>
        </div>
      </div>
    </article>
  );
});

Property.propTypes = {
  property: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sp: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Property;