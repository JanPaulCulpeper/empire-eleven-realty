import React, { Component } from 'react'
import items from './data'

const PropertyContext = React.createContext();
//<RoomContext.Provider value={}
// RoomProvider = PropertyProvider
// RoomContext = PropertyContext 
// RoomCostumer = PropertyConsumer

 class PropertyProvider extends Component {
    state={
        //rooms = properties
        //sortedRooms = sortedProperties
        //featuredRooms = featuredProperties
        properties: [],
        sortedProperties: [],
        featuredProperties:[],
        loading: true,

        // propertyType: [],
        // status: [],
        // city: [],
        // bedroom: [],
        // bath: [],
        // price: [],
        // minPrice: [],
        // maxPrice: [],
        // minSize: [],
        // maxSize: []
           };

           //getData
           componentDidMount(){
               //this.getData
               let properties = this.formatData(items)
             //  let featuredProperties = property.filter(property = property.featured === true);
               let featuredProperties = properties.filter(prope => prope.featured === true);
               this.setState({
                   properties,
                   featuredProperties,
                   sortedProperties: properties, 
                   loading: false
               })
           }

           formatData(items){
               let tempItems = items.map(item =>{
                   let id = item.sys.id
                   let images = item.fields.images.map(image => image.fields.file.url);

                   let property = { ...item.fields,images,id}
                   return property;
               });
               return tempItems
           }

    render() {
        return (
            <PropertyContext.Provider value={{...this.state}}>
                {this.props.children}
                </PropertyContext.Provider>
                );

        
    }
}

const PropertyConsumer = PropertyContext.Consumer;

export {PropertyProvider,PropertyConsumer,PropertyContext};