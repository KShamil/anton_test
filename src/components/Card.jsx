import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="assotment_card card border-warning" style={{ width: "18rem" }}>
        <img src={this.props.photo} className="card-img-top " alt="error" />
        <div className="card-body">
          <h5 className="card-title">{this.props.infoname}</h5>
          <p className="card-text">{this.props.infoprice}</p>
          <p className="card-text stock">{this.props.infostock}</p>
        </div>
      </div>
    );
  }
}

export default Card;
