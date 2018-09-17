import React, { Component } from 'react';
import searchPanel from '../searchPanel/searchPanel';
import {Link} from 'react-router-dom';
import './footer.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <footer>
  <div class="container">
    <p>Here Comes The Footer 2014 <a href=""> Copyright</a> and stuff</p>
  </div>
</footer>
    );
  }
}