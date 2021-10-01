import React, { Component } from "react";
import {  FaForward, FaSearch, FaRegCommentDots, FaMoneyBillAlt } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaSearch />,
        title: "Variety of Properties",
        info:
          "Vast catalog of properties to make your dreams come true."
      },
      {
        icon: <FaMoneyBillAlt />,
        title: "Sell With Confidence",
        info:
          "We worked hand in hand with the client to obtain the best offer you can get. "
      },
      {
        icon: <FaForward />,
        title: "Fast Process",
        info:
          "Let us offer the service you deserve with negotiation strategies, agility and results in less than a week. "
      },
      {
        icon: <FaRegCommentDots />,
        title: "Excellent Communication",
        info:
          "Empire Eleven Realty main is the client needs, you will never feel alone in this process. "
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}