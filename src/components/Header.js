// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='devFlex'>
            <div className='sectionFlex2'>
                <h2>Call a Friend</h2>
                <span>Your Friendly Contact App</span>
            </div>
        </header>
    )
}

export default Header;