import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import Show from "./Show/Show";

const data = [
  {
    name: "blah",
    price: "1",
    img: "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg"
  },
  {
    name: "blahblah",
    price: "2",
    img: "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg"
  },
  {
    name: "blahblahblah",
    price: "3",
    img: "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg"
  },
  {
    name: "blahblahblahblah",
    price: "4",
    img: "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg"
  }
];

class Home extends Component {
  render() {
    return (
      <div class="container">
        <SearchBar />
        <div class="row m-4">
          {data.map(prod => (
            <Show name={prod.name} price={prod.price} img={prod.img} />
          ))}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(withRouter(Home));
