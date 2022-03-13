import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/labels' activeStyle>
                        Labels Identification
                    </NavLink>
                    <NavLink to='/text' activeStyle>
                        Text Identification
                    </NavLink>
                    <NavLink to='/translate' activeStyle>
                        Text Translation
                    </NavLink>
                    <NavLink to='/tts' activeStyle>
                        Text To Speech
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
