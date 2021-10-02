import React from "react";
import { withPropertyConsumer } from "../context";
import Loading from "./Loading";
import PropertiesFilter from "./PropertiesFilter";
import PropertiesList from "./PropertiesList";

function PropertyContainer({ context }) {
  const { loading, sortedProperties, properties } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <PropertiesFilter properties={properties} />
      <PropertiesList properties={sortedProperties} />
    </>
  );
}

export default withPropertyConsumer(PropertyContainer);