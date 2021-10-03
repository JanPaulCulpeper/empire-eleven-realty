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
    price,
    minPrice,
    maxPrice,
    rooms,
    minRooms,
    maxRooms,
    bathRooms,
    minBathRooms,
    maxBathRooms
  } = context;

  // get unique types
  let types = getUnique(properties, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  
  
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
      {/* status */}
      <div className="form-group">
            <label htmlFor="type">Property Status</label>
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
        {/* Property price */}
        <div className="form-group">
          <label htmlFor="price">Property price ${price}</label>
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
        {/* Rooms */}
        <div className="form-group">
        <label htmlFor="price">Rooms {rooms}</label>
          <input
            type="range"
            name="rooms"
            multiple
            min={minRooms}
            max={maxRooms}
            id="rooms"
            value={rooms}
            onChange={handleChange}
            className="form-control"
          />
        </div>
    {/* Bath Rooms */}
    <div className="form-group">
        <label htmlFor="price">Bath Rooms {bathRooms}</label>
          <input
            type="range"
            name="bathRooms"
            min={minBathRooms}
            max={maxBathRooms}
            id="bathRooms"
            value={bathRooms}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </form>
    </section>
  );
};

export default PropertiesFilter;