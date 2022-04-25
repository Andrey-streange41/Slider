import React from "react";
import Navigation from "./Navigation";
import Avatar from "./Avatar/index.jsx";
import NavItem from "./NavigationItem";

class Header extends React.Component{
  render() {
    return (
      <header>
        <h1>{this.props.textContent}</h1>
        <Navigation />
        <NavItem simpleLink={true}>
          <Avatar src={this.props.imgSrc} alt={this.props.name} />
        </NavItem>
      </header>
    );
  }
}



export default Header;
