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
                    <SidebarLink to="about" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="experience" onClick={toggle}>Experience</SidebarLink>
                    <SidebarLink to="work" onClick={toggle}>Work</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>

            </SidebarWrapper>
        </SideBarContainers>
    )
}

export default SideBar