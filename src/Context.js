import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct
  };

  componentDidMount() {
    this.setProducts();
  }
  // makes copy of original objects/values to stop original from updating
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(itemObject => {
      const singleItem = { ...itemObject };
      tempProducts = [...tempProducts, singleItem];
    });

    this.setState({ products: tempProducts });
  };

  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = id => {
    console.log(`hello from add to cart the id is ${id}`);
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
