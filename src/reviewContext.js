import React, { Component } from 'react'

import Client from './Contentful';


const ReviewContext = React.createContext();


 export default class ReviewProvider extends Component {
    state = {
        reviews: [],
        stars: 0,
        message: "all"
    }

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "review"
      });
      let reviews = this.formatData(response.items);
      this.setState({
        reviews,
        loading: false,
        stars: '5',
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
                   let review = { ...item.fields,id}
                   return review;
               });
               return tempItems
           }

           getReview = (rv) => {
               let tempReview = [...this.state.reviews];
               const review = tempReview.find(review => review.rv===rv);
               return review;
           };

    render() {
        return (
            <ReviewContext.Provider 
            value={{...this.state, 
                getReview: this.getReview}}>
                    {this.props.children}
            </ReviewContext.Provider>
                );

        
    }
}

const ReviewConsumer = ReviewContext.Consumer;

export {ReviewProvider,ReviewConsumer,ReviewContext};

export function withreviewConsumer(Component) {
    return function ConsumerWrapper(props) {
      return (
        <ReviewConsumer>
          {value => <Component {...props} context={value} />}
        </ReviewConsumer>
      );
    };
  }