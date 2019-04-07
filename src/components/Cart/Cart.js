import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

import { ProductConsumer } from "../../Context";

class Cart extends Component {
  state = {};
  render() {
    return (
      <section
        style={{
          background: "#fff"
          //   height: "100vh",
          //   position: "relative",
          //   zIndex: "100"
        }}
      >
        <ProductConsumer>
          {value => {
            const { cart } = value;

            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title
                    name="your"
                    title="cart"
                    style={{ position: "relative" }}
                  />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
