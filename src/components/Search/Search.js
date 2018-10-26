import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import SearchBar from "./SearchBar/SearchBar";
import "./Search.css";

const data = [
  {
    name: "blah",
    img: "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg",
    age: "1",
    breed: "booboooo",
    gender: "female"
  },
  {
    name: "blahblah",
    img: "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg",
    age: "1",
    breed: "hello",
    gender: "female"
  },
  {
    name: "blahblahblah",
    img: "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg",
    age: "1",
    breed: "hello",
    gender: "male"
  },
  {
    name: "blahblahblahblah",
    img: "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg",
    age: "1",
    breed: "hello",
    gender: "male"
  }
];

class ProductCategoryRow extends Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class ProductRow extends Component {
  render() {
    const product = this.props.product;
    const name = product.name;
    const breed = product.breed;
    const gender = product.gender;
    const age = product.age;

    return (
      <tr>
        <td className="text-uppercase">{name}</td>
        <td>{breed}</td>
        <td>{gender}</td>
        <td>{age}</td>
      </tr>
    );
  }
}

class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText;

    const rows = [];
    this.props.products.forEach(product => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      rows.push(<ProductRow product={product} key={product.name} />);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends Component {
  handleFilterTextChange = e => {
    this.props.onFilterTextChange(e.target.value);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </form>
    );
  }
}

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    const data = [
      {
        name: "pithi",
        img: "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg",
        age: "1",
        breed: "booboooo",
        gender: "female"
      },
      {
        name: "mana",
        img: "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg",
        age: "1",
        breed: "hello",
        gender: "female"
      },
      {
        name: "lulu",
        img: "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg",
        age: "1",
        breed: "hello",
        gender: "male"
      },
      {
        name: "manee",
        img: "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg",
        age: "1",
        breed: "hello",
        gender: "male"
      }
    ];

    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ProductTable products={data} filterText={this.state.filterText} />
      </div>
    );
  }
}

FilterableProductTable.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(withRouter(FilterableProductTable));
