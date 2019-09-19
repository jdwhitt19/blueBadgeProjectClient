import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Sitebar = (props) => {
    return (
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Operator Find</NavbarBrand>
        </Navbar>
    )
}

export default Sitebar;