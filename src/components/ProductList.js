import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
// import VideoPlayer from "./Video";
import { ProductConsumer } from "../Context";

class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          {/* <ProductConsumer>
            {value => {
              const { videoPlay } = value;
              return videoPlay ? <VideoPlayer /> : null;
            }}
          </ProductConsumer> */}
          <div className="container">
            <Title name="Popular" title="products" />

            {/* products row */}
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
