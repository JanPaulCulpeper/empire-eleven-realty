import React, { Component } from 'react'

const PropertyContext = React.createContext();
//<RoomContext.Provider value={}
// RoomProvider = PropertyProvider
// RoomContext = PropertyContext 
// RoomCostumer = PropertyConsumer

 class PropertyProvider extends Component {
    state={

    };
    render() {
        return (
            <PropertyContext.Provider value={"Hello"}>
                {this.props.children}
                </PropertyContext.Provider>
                );

        
    }
}

const PropertyConsumer = PropertyContext.Consumer;

export {PropertyProvider,PropertyConsumer,PropertyContext};