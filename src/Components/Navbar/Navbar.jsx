import React, { useState } from 'react';
// import './navbar.css'
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import ContactUS from './Pages/ContactUs/ContactUS';
import Chat from './Pages/Chat/Chat';
import Projects from './Pages/Projects/Projects';

function Navbar() {
    const [active, setActive] = useState('About');

    const menuList = [
        {id: 1, name: 'About'},
        {id: 2, name: 'Resume'},
        {id: 3, name: 'Projects'},
        {id: 4, name: 'Chat'},
        {id: 5, name: 'Contact Us'},
    ];
  return (
    <>
        <div className='main-content'>
            <nav className="navbar">
                <ul className="navbar-list">
                    {menuList?.map(menu => (
                        <li className="navbar-item" key={menu.id}>
                            <button className={`navbar-link ${menu.name === active ? 'active' : ''}`} onClick={() => setActive(menu.name)}>{menu.name}</button>
                        </li>
                    ))}
                </ul>
            </nav>
            {active === 'About' && (
                <About />
            )}
            {active === 'Resume' && (
                <Resume />
            )}
            {active === 'Contact Us' && (
                <ContactUS />
            )}
            {active === 'Projects' && (
                <Projects />
            )}
            {active === 'Chat' && (
                <Chat />
            )}
        </div>
    </>
  )
}
export default Navbar;
