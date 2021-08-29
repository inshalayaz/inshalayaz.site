import React from 'react'
import { SideBarContainers, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarWrapper} from './SideBarElements'

const SideBar = ({ isOpen,toggle }) => {
    return (
        <SideBarContainers isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>

            </SidebarWrapper>
        </SideBarContainers>
    )
}

export default SideBar