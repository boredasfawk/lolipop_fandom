import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { ProductConsumer } from "../Context";

const NavWrapper = styled.nav`
  background: var(--mainBlue);

  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

const title = {
  textAlign: "center",
  margin: "0 auto",
  fontSize: "4rem",
  fontFamily: "'Creepster', cursive"
};

const noPadding = {
  paddingTop: 0,
  paddingBottom: 0
};

class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img
            src={logo}
            alt="store"
            style={noPadding}
            className="navbar-brand"
          />
        </Link>
        <ProductConsumer>
          {value => (
            <React.Fragment>
              <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                  <Link
                    to="/"
                    className="nav-link"
                    onClick={() => value.videoClose()}
                  >
                    Products
                  </Link>
                </li>
              </ul>

              <h2 style={title}>LOLIX</h2>

              <Link
                to="/cart"
                className="ml-auto"
                onClick={() => value.videoClose()}
              >
                <ButtonContainer>
                  <i className="fas fa-cart-plus" /> <span>My Cart</span>
                </ButtonContainer>
              </Link>
            </React.Fragment>
          )}
        </ProductConsumer>
      </NavWrapper>
    );
  }
}

export default NavBar;
