import React from 'react'
import { useLocation } from "react-router-dom";
import Button from '../elements/Button'
import BrandIcon from "./IconText"
import { Fade } from "react-awesome-reveal";

export default function Header(props) {
    const location = useLocation();
    const getNavLinkClass = path => {
        console.log(location.pathname, path)
        console.log('location', location)
        return location.pathname === path ? " active" : ''
        // return ""
    }

    return (
        <header className="spacing-sm">
            <div className='container'>
                <Fade triggerOnce>
                    <nav className='navbar navbar-expand-lg navbar-light'>
                        <BrandIcon />
                        <div className='collapse navbar-collapse'>
                            <ul className="navbar-nav ml-auto">
                                <li className={`nav-item${getNavLinkClass("/")}`}>
                                    <Button className='nav-link' type='link' href=''>
                                        Home
                                    </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                                    <Button className='nav-link' type='link' href='/browse-by'>
                                        Browser By
                                    </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                                    <Button className='nav-link' type='link' href='/stories'>
                                        Stories
                                    </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                                    <Button className='nav-link' type='link' href='/agents'>
                                        Agents
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </Fade>
            </div>
        </header>
    )
}
