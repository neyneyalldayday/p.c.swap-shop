import React from 'react'
import {
    Nav,
    NavbarContainer, 
    NavLogo,     
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements' 

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    
                </NavLogo>
                <MobileIcon >
                    mobile icon
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/images">images</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/videos">videos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/buy/sell">buy/sell</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/forums">forums</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
            
        </>
    )
}

export default Navbar
