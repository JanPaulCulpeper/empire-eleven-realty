import React, { Component } from 'react';
import { PropertyContext } from '../context';
export default class FeaturedProperties extends Component {
    static contextType = PropertyContext
    render() {
       const { featuredProperties: property} = this.context;
       console.log(property);
      
        return (
            <div>
                from feature Properties 
            </div>
        )
    }
}
