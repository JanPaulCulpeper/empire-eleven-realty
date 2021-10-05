import React from "react";
import { useContext } from "react";
import { PropertyContext } from "../context";
import Title from "./Title"



const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const PropertiesFilter = ({ properties }) => {
  // react hooks
  const context = useContext(PropertyContext);
  const {
    handleChange,
    type,
    status,
    price,
    minPrice,
    maxPrice,
    bedRooms,
    bathRooms,
    city
    
  } = context;

  // get unique types
  let types = getUnique(properties, "type");
  let statuss = getUnique(properties, "status")
  let bedRoomss = getUnique(properties, "bedRooms")
  let bathRoomss = getUnique(properties, "bathRooms")
  let cities = getUnique(properties, "city")
  // add all
  types = ["all", ...types];
  statuss = ["all", ...statuss];
  bedRoomss = ["all", ...bedRoomss];
  bathRoomss = ["all", ...bathRoomss];
  cities = ["all", ...cities];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  statuss = statuss.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  bedRoomss = bedRoomss.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  bathRoomss = bathRoomss.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  cities = cities.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  const commaNumber = require('comma-number')
  
  return (
    <section className="filter-container">
      <Title title="search Properties" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Property type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* Status  */}
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            onChange={handleChange}
            className="form-control"
            value={status}
          >
            {statuss}
          </select>
        </div>
        {/* end of status */}
        {/* BedRooms  */}
        <div className="form-group">
          <label htmlFor="bedRooms">Bed Rooms</label>
          <select
            name="bedRooms"
            id="bedRooms"
            onChange={handleChange}
            className="form-control"
            value={bedRooms}
          >
            {bedRoomss}
          </select>
        </div>
        {/* end of BedRooms */}
        {/* BathRooms  */}
        <div className="form-group">
          <label htmlFor="bathRooms">Bath Rooms</label>
          <select
            name="bathRooms"
            id="bathRooms"
            onChange={handleChange}
            className="form-control"
            value={bathRooms}
          >
            {bathRoomss}
          </select>
        </div>
        {/* end of BathRooms */}
        {/* city */}
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            name="city"
            id="city"
            onChange={handleChange}
            className="form-control"
            value={city}
          >
            {cities}
          </select>
        </div>
        {/* end of City */}
        {/* Property price */}
        <div className="form-group">
          <label htmlFor="price">Price ${commaNumber(price)}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of Property price*/}
        
        
      </form>
    </section>
  );
};

export default PropertiesFilter;