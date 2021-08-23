import React from "react";

export default class mainContent extends React.Component {
  render() {
    return (
      <div className="flex items-center mx-48 mt-14 font-open-sans">
        <div className="flex-shrink-0 mx-2">
          <img src={this.props.image} alt="blog" />
        </div>
        <div className="flex-grow mx-2">
          <p className="font-bold text-2xl my-4">{this.props.title}</p>
          <p className="text-gray-400 my-4">{this.props.date}</p>
          <p className="my-4">{this.props.desc}</p>
        </div>
      </div>
    );
  }
}