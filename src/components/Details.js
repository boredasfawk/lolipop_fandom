import React, { Component } from "react";
import { ProductConsumer } from "../Context";
//import Product from "./Product";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            title,
            price,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/*start title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title  */}
              {/*  start product info*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  {/*  product image*/}
                  <img
                    src={img}
                    className="img-fluid"
                    alt={`product id: ${id}`}
                  />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  {/*  product text*/}
                  <h3>model: {title}</h3>
                  <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h5>
                  <h5 className="text-blue">
                    <strong>
                      Price: <span>$</span>
                      {price}
                    </strong>
                  </h5>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Product Info:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* button start */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back To Products</ButtonContainer>
                    </Link>

                    <ButtonContainer
                      detailCart
                      disabled={inCart}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "In Cart" : "Add To Cart"}
                    </ButtonContainer>
                  </div>
                  {/* button end */}
                </div>
              </div>
              {/* end product info*/}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
