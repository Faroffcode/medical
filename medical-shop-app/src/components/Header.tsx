import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pathology-labs">Pathology Labs</Link></li>
                    <li><Link to="/medical-shops">Medical Shops</Link></li>
                    <li><Link to="/doctors">Doctors</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;