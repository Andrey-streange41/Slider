import React from 'react';

class NavItem extends React.Component{

    render() {
    if(this.props.simpleLink){
        return <a href={this.props.href}>{this.props.children}</a>;
    }
        return (
            <li><a href={this.props.link}>{this.props.textContent}</a></li>
        )
    }
}


export default NavItem;