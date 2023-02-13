import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import Logo from '../../assets/andrey-high-resolution-logo-color-on-transparent-background.png';
import { NavigationContainer, NavbarMenu, LogoStyle, SideContainer, SmallSideContainer} from './navbar.style';
import ButtonWindow from "../../components/buttons/window/window.component";
import ButtonPhone from "../../components/buttons/phone/phone.component";
import ButtonBurger from "../../components/buttons/burger/burger";
import BurgerMemu from "../../components/burger-menu/burger-menu.component";
import Contacts from "../../components/contacts/contacts.component";
import Linker from "../../components/linker/linker.component";
import LanguageToggle from "../../components/language-toggle/language-toggle.component";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <NavigationContainer>
                <BurgerMemu
                    open={open}
                    openToggle={() => setOpen(!open)}
                />
                <ButtonBurger open={open} openToggle={() => setOpen(!open)} />
                <Linker to='/'>
                    <LogoStyle src={Logo}/>
                </Linker>
                <NavbarMenu>
                    <Linker to='/projects' name='Projects' />
                    <Linker to='/skills' name='Skills' />
                    <Linker to='/about' name='About' />
                </NavbarMenu>
                <SmallSideContainer>
                    <ButtonPhone />
                </SmallSideContainer>
                <SideContainer>
                    <ButtonWindow name='Contacts' type='small'>
                        <Contacts />
                    </ButtonWindow>
                    <LanguageToggle />
                </SideContainer>
            </NavigationContainer>
            <Outlet />
        </>
)};

export default Navbar;
