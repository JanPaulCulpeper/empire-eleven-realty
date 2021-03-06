import React, { Component } from 'react';
import { PropertyContext } from '../context';
import Loading from "./Loading";
import Property from "./Property";
import Title from "./Title";


export default class FeaturedProperties extends Component {
    //RoomContext = PropertyContext
    static contextType = PropertyContext
    render() {
     
       let { loading, featuredProperties: properties} = this.context;
      properties = properties.map(property => {
          return <Property key = {property.id} property={property}/>
      })
      
        return (
            <section className="featured-properties">
                <Title title="featured Properties"/>
                <div className="featured-properties-center"> 
                {loading ? <Loading/> : properties}
                </div>
                
            </section>
        )
    }
}
