import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";

const Property = memo(({ property }) => {
  const { name, sp, images, price } = property;
  
  
  return (
    <article className="property">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single property" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/properties/${sp}`} className="btn-primary property-link">
          features
        </Link>
      </div>
      <p className="property-info">{name}</p>
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