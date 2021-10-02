import React from "react";
import Property from "./Property";
const PropertiesList = ({ properties }) => {
  if (properties.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no properties matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="propertieslist">
      <div className="propertieslist-center">
        {properties.map(item => {
          return <Property key={item.id} property={item} />;
        })}
      </div>
    </section>
  );
};

export default PropertiesList;