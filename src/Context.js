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
      modalProduct: detailProduct,
      cartSubtotal: 0,
      cartTax: 0,
      cartTotal: 0,
      videoPlay: true
    };
  }
  // once component is loaded sets products to copy of original product data
  componentDidMount() {
    this.setProducts();
    this.setState(() => {
      return {
        videoPlay: true
      };
    });
  }
  // makes copy of original objects/values to stop original from updating
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(itemObject => {
      const singleItem = { ...itemObject }; // destructures each object into new object
      tempProducts = [...tempProducts, singleItem]; // destructures tempproduct array of objects while adding new singleitem object into new array for tempProducts
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
    const index = tempProducts.indexOf(this.getProduct(id)); //uses index in order to stop product list from updating out of order
    const product = tempProducts[index];
    const price = product.price;

    product.total = price;
    product.inCart = true;
    product.count = 1;

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product] // destructures current cart and adds new product into new array for updated cart
        };
      },
      () => this.addTotals() // everytime product is added to cart addTotals is ran as well
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
  // increases product count by one
  // calls addtotals after each run
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => this.addTotals()
    );
  };
  // decreases product count by one
  // if product count equals 0 calls removeItem
  // calls addTotals to update totals
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => this.addTotals()
      );
    }
  };
  // makes copys of products and cart currently in state
  // filters tempCart for items without matching id
  // item with matching id gets values reset to original values
  // sets state for cart and products without removed item
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getProduct(id));
    let removedProduct = tempProducts[index];

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts]
        };
      },
      () => this.addTotals() // runs addtotals to make sure current totals are up to date
    );
  };
  // clears cart setting cart to empty array
  // resets products from orig data in storeProducts
  // resets totals by running addtotals on empty cart
  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: []
        };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  // maps through current cart and adds total to subtotal
  // adds tax to subtoal then sum is placed in tax var
  // total is sum of tax and subtotal
  // sets current state with updated values
  addTotals = () => {
    let subtotal = 0;
    this.state.cart.map(item => (subtotal += item.total));

    const tempTax = subtotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;

    this.setState(() => {
      return {
        cartSubtotal: subtotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  // closes video player after user leaves page
  videoClose = () => {
    this.setState(() => {
      return {
        videoPlay: false
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
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          videoClose: this.videoClose
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
