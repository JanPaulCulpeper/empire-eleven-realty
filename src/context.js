import React, { Component } from 'react'
//import items from './data';
import Client from './Contentful';


const PropertyContext = React.createContext();
//<propertyContext.Provider value={}
// propertyProvider = PropertyProvider
// propertyContext = PropertyContext 
// propertyCostumer = PropertyConsumer

 export default class PropertyProvider extends Component {
    state = {
        properties: [],
        sortedProperties: [],
        featuredProperties: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
      };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "property"
      });
      let properties = this.formatData(response.items);


      let featuredProperties = properties.filter(room => room.featured === true);
      
      let maxPrice = Math.max(...properties.map(item => item.price));
      let maxSize = Math.max(...properties.map(item => item.size));
      this.setState({
        properties,
        featuredProperties,
        sortedRooms: properties,
        loading: false,
        
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };
           componentDidMount(){
               this.getData()
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

           getProperty = (sp) => {
               let tempProperty = [...this.state.properties];
               const property = tempProperty.find(property => property.sp===sp);
               return property;
           };
        
           handleChange = event => {
            const target = event.target;
            const value = target.type === "checkbox" ? target.checked : target.value;
            const name = target.name;
        
            this.setState(
              {
                [name]: value
              },
              this.filterProperties
            );
          };
          filterProperties = () => {
            let {
              properties,
              type,
              capacity,
              price,
              minSize,
              maxSize,
              breakfast,
              pets
            } = this.state;
        
            let tempProperties = [...properties];
            // transform values
            // get capacity
            capacity = parseInt(capacity);
            price = parseInt(price);
            // filter by type
            if (type !== "all") {
              tempProperties = tempProperties.filter(property => property.type === type);
            }
            // filter by capacity
            if (capacity !== 1) {
              tempProperties = tempProperties.filter(property => property.capacity >= capacity);
            }
            // filter by price
            tempProperties = tempProperties.filter(property => property.price <= price);
            //filter by size
            tempProperties = tempProperties.filter(
              property => property.size >= minSize && property.size <= maxSize
            );
            //filter by breakfast
            if (breakfast) {
              tempProperties = tempProperties.filter(property => property.breakfast === true);
            }
            //filter by pets
            if (pets) {
              tempProperties = tempProperties.filter(property => property.pets === true);
            }
            this.setState({
              sortedProperties: tempProperties
            });
          };

    render() {
        return (
            <PropertyContext.Provider 
            value={{...this.state, 
                getProperty: this.getProperty,
                handleChange: this.handleChange}}>
                    {this.props.children}
            </PropertyContext.Provider>
                );

        
    }
}

const PropertyConsumer = PropertyContext.Consumer;

export {PropertyProvider,PropertyConsumer,PropertyContext};

export function withPropertyConsumer(Component) {
    return function ConsumerWrapper(props) {
      return (
        <PropertyConsumer>
          {value => <Component {...props} context={value} />}
        </PropertyConsumer>
      );
    };
  }