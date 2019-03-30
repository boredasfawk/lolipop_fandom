import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      detailProduct,
      cart: [],
      isModalOpen: false,
      modalProduct: detailProduct
    };
  }

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
  // returns product id from product array
  getProduct = id => {
    const product = this.state.products.find(product => product.id === id);
    return product;
  };
  // sets detailProduct to whatever product id set as argument
  setDetailProduct = id => {
    const product = this.getProduct(id);
    this.setState(() => {
      return {
        detailProduct: product
      };
    });
  };
  // product id passed as argument is added into cart array and updated product is added back into products array
  //tempProduct IS GETTING UPDATED IMPLICITLY
  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getProduct(id));
    const product = tempProducts[index];
    const price = product.price;

    product.total = price;
    product.inCart = true;
    product.count = 1;

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  // opens modal for passed id when product is clicked
  openModal = id => {
    const product = this.getProduct(id);

    this.setState(() => {
      return {
        modalProduct: product,
        isModalOpen: true
      };
    });
  };
  // closes modal when product is clicked
  closeModal = () => {
    this.setState(() => {
      return {
        isModalOpen: false
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          setDetailProduct: this.setDetailProduct,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
