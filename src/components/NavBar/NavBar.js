import React, { useContext, useEffect} from 'react'
import {Nav, NavLogo, NavbarContainer, MobileIcon, NavMenu, NavItem,NavLinks } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import Logo from '../../assets/My Picture.JPG'
import { AppContext } from '../../context/AppContext';


const Navbar = ({ toggle }) => {
    
    const {scrollnav,setScrollNav} = useContext(AppContext)
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
    // eslint-disable-next-line
   },[])

    return (
        <>
            <Nav scrollnav={scrollnav}>
                <NavbarContainer>
                    <NavLogo to='/' >
                        <img src={Logo} alt="Logo" style={{height: "70px", borderRadius:"50%" }}/>
                    </NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="home" smooth={true} duration={500} spy={true} exact="true" scrollnav={scrollnav} >Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" scrollnav={scrollnav} >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services" smooth={true} duration={500} spy={true} exact="true" scrollnav={scrollnav}>Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="experience" smooth={true} duration={500} spy={true} exact="true" scrollnav={scrollnav}>Experience</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="work" smooth={true} duration={500} spy={true} exact="true">Work</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contact" smooth={true} duration={500} spy={true} exact="true">Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                       
                        
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
