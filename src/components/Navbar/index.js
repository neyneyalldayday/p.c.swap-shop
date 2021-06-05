import React, {useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib"
import {
    Nav,
    NavbarContainer, 
    NavLogo,     
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavIcon
} from './NavbarElements' 

const Navbar = () => {
    const[click, setClick] = useState(false)
    const[scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        }else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return (
        <>
        <IconContext.Provider value={{color: "#141414"}}>
        <Nav active={scroll} click={click}>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon />
                    P.C.S.S                   
                </NavLogo>
                <MobileIcon onClick={handleClick} >
                   {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>                    
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                       <NavLinks to="/">Home</NavLinks>
                    </NavItem>                  
                    <NavItem>
                        <NavLinks to="/archivepage">Photo Archive</NavLinks>
                    </NavItem>                   
                    <NavItem>
                        <NavLinks to="/videopage">videos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/buysellpage">buy/sell</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/forumpage">forums</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
         </IconContext.Provider>   
        </>
    )
}

export default Navbar
