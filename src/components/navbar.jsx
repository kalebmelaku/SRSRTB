import { useState } from 'react';
import logo from '../assets/main_logo.png';
export default function NavBar(){
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (id) => {
        if (id !== 'home') {
            
            setActiveLink(id);
          }
    };
    return (
        <>
             <nav className="navbar py-0 navbar-expand-lg sticky-top bg-body-tertiary" id="navbar">
        <div className="container-sm">
            <a href="/" className="navbar-brand">
                <img src={logo} alt="logo" width="60" height="" className="d-inline-block align-text-top" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto"></div>
                <div className="navbar-nav">
                    <ul  className="navbar-nav d-flex align-items-center justify-content-center">
                        <li  className="nav-item" onClick={()=>handleLinkClick('home')}>
                            <a href="/" className={`nav-link py-0 ${activeLink === 'home' ? 'active' : ''}`}  >HOME</a>
                        </li>
                        <li  className="nav-item " onClick={()=>handleLinkClick('about')}>
                            <a className={`nav-link py-0 ${activeLink === 'about' ? 'active' : ''}`} href="/#about" aria-expanded="false">
                                ABOUT US
                            </a>
                        
                        </li>
                        <li  className="nav-item" onClick={() => handleLinkClick('partners')}>
                            <a className={`nav-link py-0 ${activeLink === 'partners' ? 'active' : ''}`} href="/#partners" aria-expanded="false">
                                PARTNERS
                            </a>
                        </li>
                    
                        <li  className="nav-item" onClick={() => handleLinkClick('vacancy')}>
                            <a className={`nav-link py-0 ${activeLink === 'vacancy' ? 'active' : ''}`} href="/#vacancy">
                                VACANCY
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
        </>
    );
}
