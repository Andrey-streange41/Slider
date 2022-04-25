import NavItem from "./NavigationItem";
import React from 'react';


class Navigation extends React.Component{
render() {
    return (
        <nav>
            <ul>
                <NavItem link="#" textContent="Part1"/>
                <NavItem link="#" textContent="Part2"/>
                <NavItem link="#" textContent="Part3"/>
                <NavItem link="#" textContent="Part4"/>
            </ul>
        </nav>
    )
}
}



export default Navigation;