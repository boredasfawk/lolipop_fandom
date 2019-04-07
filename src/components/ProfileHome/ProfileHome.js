import React, { Component } from "react";
import "./ProfileHome.css";

import Header from "./Header";
import ShowCase from "./ShowCase";
import Projects from "./Projects";
import Footer from "./Footer";

class ProfileHome extends Component {
  componentDidMount() {
    this.HeaderScroll();
  }

  HeaderScroll = e => {
    const navName = document.getElementsByClassName("nav-name")[0];
    const home = document.getElementsByClassName("home")[0];
    const projects = document.getElementsByClassName("projects")[0];
    const contact = document.getElementsByClassName("contact")[0];
    const header = document.getElementsByClassName("header-container")[0];

    const media = window.matchMedia("(max-width: 690px)");

    // finds offset top of element
    function getOffset(el) {
      let _x = 0;
      let _y = 0;
      while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
      }
      return { top: _y, left: _x };
    }

    const projectsTop = getOffset(document.getElementById("projects")).top;
    const footerTop = getOffset(document.getElementById("break")).top;

    // depending on size of screen header transitions differently
    // if document offset top matches section user is currently viewing color changes to correct section
    if (media.matches) {
      if (document.documentElement.scrollTop < projectsTop) {
        header.classList.remove("header-container-active");
        navName.classList.add("trans");
        home.classList.add("active");
        projects.classList.remove("active");
        contact.classList.remove("active");
      } else if (
        document.documentElement.scrollTop > projectsTop &&
        document.documentElement.scrollTop < footerTop
      ) {
        header.classList.add("header-container-active");
        navName.classList.remove("trans");
        home.classList.remove("active");
        projects.classList.add("active");
        contact.classList.remove("active");
      } else if (document.documentElement.scrollTop > footerTop) {
        header.classList.add("header-container-active");
        navName.classList.remove("trans");
        home.classList.remove("active");
        projects.classList.remove("active");
        contact.classList.add("active");
      }
    } else {
      if (document.documentElement.scrollTop < projectsTop) {
        header.classList.remove("header-container-active");
        navName.classList.add("trans");
        home.classList.add("active");
        projects.classList.remove("active");
        contact.classList.remove("active");
      } else if (
        document.documentElement.scrollTop > projectsTop &&
        document.documentElement.scrollTop < footerTop
      ) {
        header.classList.add("header-container-active");
        navName.classList.remove("trans");
        home.classList.remove("active");
        projects.classList.add("active");
        contact.classList.remove("active");
      } else if (document.documentElement.scrollTop > footerTop) {
        header.classList.add("header-container-active");
        navName.classList.remove("trans");
        home.classList.remove("active");
        projects.classList.remove("active");
        contact.classList.add("active");
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <ShowCase />
        <Projects />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProfileHome;
