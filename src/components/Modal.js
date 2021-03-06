import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { closeModal, isModalOpen } = value;
          const { img, title, price } = value.modalProduct;

          if (!isModalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="p-5 col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                    >
                      <h5>item added to cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">
                        price: <span>$</span> {price}
                      </h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          <h6 className="marginBottom">Continue Shopping</h6>
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer
                          detailCart
                          onClick={() => {
                            closeModal();
                            value.videoClose();
                          }}
                        >
                          <h6 className="marginBottom">Go To Cart</h6>
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
  }
`;

export default Modal;
