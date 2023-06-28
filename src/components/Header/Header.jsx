import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import { Switch } from '@mui/material'; 
import 'bootstrap/dist/css/bootstrap.css';

import navLinks from "../../constants";
import { ThemeContext } from '../../App'; 

const Header = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const location = useLocation();
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        const path = location.pathname;
        const activeLink = navLinks.find((link) => link.linkTo === path);
        const index = navLinks.indexOf(activeLink);
        setActiveIndex(index);
    }, [location]);

    const handleThemeChange = () => {
        setTheme(prevTheme => prevTheme === "dark" ? "blue" : "dark");
    }

    return (
        <header>
            <Navbar bg={theme} expand="lg" variant={theme} className="fixed-top d-flex justify-content-between"  style={{ padding: "10px 20px" }}>
                <Navbar.Brand href="/">My App</Navbar.Brand>
                <Switch checked={theme === "blue"} onChange={handleThemeChange} />
                <Nav>
                    {navLinks.map((link, index) => (
                        <Nav.Link
                            key={index}
                            href={link.linkTo}
                            className={activeIndex === index ? "active nav-link" : "nav-link"}
                            style={activeIndex === index ? { borderBottom: theme === "dark" ? "2px solid white" : "2px solid black" } : null}
                        >
                            {link.name}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;
