import React, { useEffect, useState} from 'react'
import {Nav, NavLogo, NavbarContainer, MobileIcon, NavMenu, NavItem,NavLinks } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import Logo from '../../assets/My Picture.JPG'



const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

   useEffect(()=>{
       window.addEventListener('scroll', changeNav)
    changeNav()
   },[])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' >
                        <img src={Logo} alt="Logo" style={{height: "70px", borderRadius:"50%" }}/>
                    </NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="discover" smooth={true} duration={500} spy={true} exact="true">Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services" smooth={true} duration={500} spy={true} exact="true">Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signup" smooth={true} duration={500} spy={true} exact="true">Sign Up</NavLinks>
                            </NavItem>
                        </NavMenu>
                       
                        
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
