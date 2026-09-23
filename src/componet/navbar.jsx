import React from 'react'
import { MoveRight, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    return (
        <div>
            <div className="nav" id="nav">

                <div className="logo" id="logo"></div>
                <div className="text">
                    <h3>InternTrack</h3>
                    <p>AI</p>
                </div>
                <div className="content" id="navLinks">
                    <h5 id="feature">Feature</h5>
                    <h5 id="role">Roles</h5>
                    <h5 id="ai">Ai</h5>
                    <h5 id="impact">Impact</h5>
                </div>

                <div className="login" id="navLogin">
                    <div className="sign1">sign in</div>

                    <Link to="/login" className='sign2'>
                        <h4> Get started
                            <MoveRight /></h4>
                    </Link>
                </div>
                <button className="menu-btn" id="menuBtn">
                    <Menu strokeWidth={1} />
                </button>
                <button id="xBar">
                    <X strokeWidth={2.75} />
                </button>
            </div>

        </div>
    )
}

export default Navbar
