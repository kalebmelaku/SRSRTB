import { useState } from 'react';
import logo from '../assets/main_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(){
    const [activeLink, setActiveLink] = useState('');
    const [showNav, setShowNav] = useState(false);

    const handleLinkClick = (id) => {
        if (id !== 'home') {
            setActiveLink(id);
        }
        setShowNav(false);
    };

    return (
        <>
            <nav className="navbar py-0 navbar-expand-lg sticky-top bg-body-tertiary" id="navbar">
                <div className="container-sm d-flex justify-content-between">
                    <a href="/" className="navbar-brand">
                        <img src={logo} alt="logo" width="60" height="" className="d-inline-block align-text-top" />
                    </a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        onClick={() => setShowNav(!showNav)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`offcanvas offcanvas-end ${showNav ? 'show' : ''}`} id="navbarCollapse">
                        <div className="navbar-nav ms-auto"></div>
                        <div className="offcanvas-header">
                            <button type="button" className="" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setShowNav(false)}>
                            <FontAwesomeIcon icon={faXmark} className="fa-2x" />
                            </button>
                        </div>
                        <div className="offcanvas-body align-items-end justify-content-end">
                            <div className="navbar-nav">
                                <ul  className="navbar-nav d-flex align-items-center justify-content-center">
                                    <li  className="nav-item" onClick={()=>handleLinkClick('home')}>
                                        <a href="/" className={`nav-link py-0 ${activeLink === 'home' ? 'active' : ''}`}  >Home</a>
                                    </li>
                                    <li  className="nav-item " onClick={()=>handleLinkClick('about')}>
                                        <a className={`nav-link py-0 ${activeLink === 'about' ? 'active' : ''}`} href="/#about" aria-expanded="false">
                                            About Us
                                        </a>
                                    </li>
                                    <li  className="nav-item" onClick={() => handleLinkClick('partners')}>
                                        <a className={`nav-link py-0 ${activeLink === 'partners' ? 'active' : ''}`} href="/#partners" aria-expanded="false">
                                            Partners
                                        </a>
                                    </li>
                                    <li  className="nav-item" onClick={() => handleLinkClick('vacancy')}>
                                        <a className={`nav-link py-0 ${activeLink === 'vacancy' ? 'active' : ''}`} href="/#vacancy">
                                            Vacancy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}