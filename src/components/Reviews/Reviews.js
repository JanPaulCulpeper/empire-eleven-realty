
import React, { Component } from 'react'
import Review from "./Review";
import Client from '../../Contentful'
import Loading from "../Loading";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


export class Reviews extends Component {
  state = {
    reviews: [],
    loading: true
  }
  breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "review"
      });
      let reviews  = this.formatData(response.items)
      console.log(reviews)
      this.setState({
        reviews,
        loading:false
      })
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount(){
    this.getData()
  }


formatData(items){
  let tempItems = items.map(item =>{
    let review = {...item.fields}
    return review
  })
  console.log(tempItems)
  return tempItems;
}
  render() {
    console.log(this.state)
    let reviewsItems = this.state.reviews.map(review => {
      return  <Review review = {review}/>
  })

    return (
        <div className="reviews">
        <h1 style={{ textAlign: "center" }}>Past Clients Reviews</h1>
          <div className="sliders1">
            <Carousel breakPoints={breakPoints}>
              {this.loading ? <Loading/> : reviewsItems}
            </Carousel>
          </div>
        </div>
    )
  }
}

export default Reviews


