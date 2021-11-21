import React, { useState } from 'react'
import "./header.css"
import Web from './web/Web'
import Mobile from "./mobile/Mobile"
function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="header">
            <div className="logo">Overreacted</div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobaile-menu">
                <div onClick={() => setIsOpen(!isOpen)}>
                    <i className="fi-rr-apps"></i>
                </div>
                </div>
                {isOpen && <Mobile  isOpen={isOpen} setIsOpen={setIsOpen}/>}
            </div>
        </div>
    )
}

export default Header
