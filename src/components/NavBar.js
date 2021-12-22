import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav_bar_styles.css';

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const [isDesktop, setIsDesktop] = useState();

    function switch_menu() {
        setShowMenu(!showMenu);
    }

    function close_menu() {
        setShowMenu(false);
    }

    useEffect(() => {
        window.innerWidth > 600 ?
            setIsDesktop(true) : setIsDesktop(false);
    }, []);

    window.addEventListener('resize', () => {
        window.innerWidth > 600 ?
            setIsDesktop(true) : setIsDesktop(false);
    });

    return (
        <div className="nav_bar">
            <div className="icon-container menu-switch">
                {
                    isDesktop ?
                        <i onClick={switch_menu} className={`${showMenu ? 'fas fa-times' : 'far fa-circle'}`} />
                        :
                        <i onClick={switch_menu} className={`${showMenu ? 'fas fa-times' : 'fas fa-bars'}`} />
                }
            </div>
            
            <div className={`nav_container ${showMenu ? 'menu-active' : null}`}>
                <div className="icon-container logo">
                    {/* <i className="fab fa-earlybirds" /> */}
                    <i className="fab fa-envira"></i>
                </div>
                <ul className="menu-items">
                    <li>
                        <Link to="/react-webpage-02/" onClick={close_menu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/react-webpage-02/products" onClick={close_menu}>Products</Link>
                    </li>
                    <li>
                        <Link to="/react-webpage-02/about" onClick={close_menu}>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
