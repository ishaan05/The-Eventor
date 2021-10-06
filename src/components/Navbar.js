import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FcPodiumWithSpeaker } from 'react-icons/fc'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from 'reactstrap';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'
import LogoutIcon from '@mui/icons-material/Logout'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
       <IconContext.Provider value={{ color: '#fff' }}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/main' className="navbar-logo" onClick={closeMobileMenu}>
                        <FcPodiumWithSpeaker className="navbar-icon" />
                        <h1 className="title">The Eventor</h1>
                    </Link>
                    <Link to="/logout"><LogoutIcon style={{ fontSize: 25 , marginBottom: '18px' , marginLeft: '590px',   color: 'lightgreen' }}/></Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                        <Link to='/main' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/pricing' className="nav-links" onClick={closeMobileMenu}>
                            Pricing
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/create-event' className="nav-links" onClick={closeMobileMenu}>
                            Create Event
                        </Link>
                        </li>
                   
                        {/* <ul className={click ? 'nav-menu active' : 'nav-menu'} /> */}
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/sign-up' className="btn-link">
                                    <Button className="btn">Login</Button>
                                </Link>
                            ) : (
                                <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                    <Button className="btn">
                                        Login
                                    </Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>  
            {/* {<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-logo">
                        <CgClapperBoard className="navbar-icon" />
                        <h1 className="title">The Eventor</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                         <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Button className="btn btn-outline-success" type="submit">Search</Button>
                    </form>
    </div>
  </div>
</nav>  */}
        </IconContext.Provider>
        </>
    )
}

export default Navbar
