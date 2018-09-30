import React, { Component } from 'react';
import './Show.css'


export default class Show extends Component {
    constructor(props) {
        super(props);
      }

  render() {
    return (
          <div class="col-sm-4">
              <img class="item img-thumbnail" src={this.props.img} alt=""/>
              <p>{this.props.name}</p>
              <p>Price: {this.props.price}</p>
          </div>
    );
  }
}