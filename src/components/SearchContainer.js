import React from "react";
import { withPropertyConsumer } from "../context";
import Loading from "./Loading";
import PropertiesFilter from "./PropertiesFilter";

function SearchContainer({ context }) {
  const { loading, properties } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <PropertiesFilter properties={properties} />
    </>
  );
}

export default withPropertyConsumer(SearchContainer);