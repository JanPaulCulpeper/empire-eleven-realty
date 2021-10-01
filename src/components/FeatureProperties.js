import React, { Component } from 'react';
import { PropertyContext } from '../context';

export default class FeatureProperties extends Component {
    static contextType = PropertyContext
    render() {
        const value = this.context;
        console.log(value);
        return (
            <div>
                hello from feature Properties {value}
            </div>
        )
    }
}
