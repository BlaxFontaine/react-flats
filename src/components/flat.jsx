import React, { Component } from 'react';

class Flat extends Component {

  render() {

    return (
      <div className="card" >
        <div className="card-category">`${this.props.price} ${this.props.priceCurrency}`</div>
        <div className="card-description">
          <h2>`${this.props.name}`</h2>
        </div>
        <a className="card-link"></a>
      </div>
      );
   }
}

export default Flat;
