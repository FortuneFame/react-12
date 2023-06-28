import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

import navLinks from "../../constants";
import { ThemeContext } from '../../App'; 

const Footer = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const location = useLocation();
    const { theme } = useContext(ThemeContext); 

    useEffect(() => {
        const path = location.pathname;
        const activeLink = navLinks.find((link) => link.linkTo === path);
        const index = navLinks.indexOf(activeLink);
        setActiveIndex(index);
    }, [location]);

    return (
        <footer>
            <Navbar bg={theme} expand="lg" variant={theme} className="fixed-bottom d-flex justify-content-between" style={{ padding: "10px 20px" }}>
                <Navbar.Brand href="/">My App</Navbar.Brand>
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
        </footer>
    );
};

export default Footer;
