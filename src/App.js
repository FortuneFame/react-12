import React, { useState, useEffect, createContext } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

export const CountContext = createContext(0); 
export const ThemeContext = createContext(); 

const App = () => {
    const initialTheme = localStorage.getItem('theme') || "dark";
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <CountContext.Provider value={{ count, setCount }}>
                <Header />
                <main style={{ paddingTop: "70px", paddingBottom: "70px" }}>
                    <Outlet />
                </main>
                <Footer />
            </CountContext.Provider>
        </ThemeContext.Provider>
    );
};

export default App;
