import { Building, GraduationCap, MoveLeft, UserShield, BuildingComplex, ShieldCheck } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'



function Login() {
    return (
        <div>
            <div class="get-nav">
                <button id="home-back">
                    <MoveLeft />
                    <a href="/"> <h4>Back to Home</h4></a>
                </button>
                <div class="get-logo" id="get-logo">
                    <div class="getlogo-img"></div>
                    <div class="logo-text">
                        <h3>InternTrack</h3>
                        <p>AI</p>
                    </div>
                </div>
            </div>
            <div class="main">
                <main class="portal-section">
                    {/* <!-- Heading --> */}
                    <div class="portal-heading">
                        <h1>Choose your <span>portal</span></h1>
                        <p>
                            Five secure role-based experiences — one intelligent platform.
                        </p>
                    </div>
                    {/* <!-- Cards --> */}
                    <div class="portal-grid">
                        {/* <!-- Student --> */}
                        <div class="portal-card student">
                            <div class="icon-box">
                                <GraduationCap />
                            </div>
                            <h2>Student Login</h2>
                            <p>
                                Track internships, logbook, resume score & placement
                            </p>
                            <Link to="/registration/student">
                                Continue <span>→</span>
                            </Link>
                        </div>
                        {/* <!-- Company --> */}
                        <div class="portal-card company">
                            <div class="icon-box">
                                <Building />
                            </div>
                            <h2>Company Login</h2>
                            <p>
                                Post internships, manage applicants, issue certificates
                            </p>
                            <Link to="/registration/company">
                                Continue <span>→</span>
                            </Link>
                        </div>
                        {/* <!-- College Admin --> */}
                        <div class="portal-card college">
                            <div class="icon-box">
                                <BuildingComplex color="#fff" />
                            </div>
                            <h2>College Admin Login</h2>
                            <p>
                                Approve, verify & analyze department outcomes
                            </p>
                            <Link to="/registration/college">
                                Continue <span>→</span>
                            </Link>
                        </div>
                        {/* <!-- Mentor --> */}
                        <div class="portal-card mentor">
                            <div class="icon-box">
                                <UserShield color="#fff" />

                            </div>
                            <h2>Mentor Login</h2>
                            <p>
                                Guide students, verify attendance & review progress
                            </p>
                            <Link to="/registration/mentor">
                                Continue <span>→</span>
                            </Link>
                        </div>
                        {/* <!-- Super Admin --> */}
                        <div class="portal-card admin">
                            <div class="icon-box">
                                <ShieldCheck color="#fff" />
                            </div>
                            <h2>Super Admin Login</h2>
                            <p>
                                Global system, AI models, audit & analytics
                            </p>
                            <Link to="/registration/superadmin">
                                Continue <span>→</span>
                            </Link>
                        </div>
                    </div>
                </main>
                <div class="registration">

                </div>
            </div>

            <footer class="footer">
                <div class="footer-main">
                    <div class="footer-brand">
                        <div class="brand-name">
                            <div class="brand-icon">
                                <i class="fa-solid fa-wand-magic-sparkles"></i>
                            </div>
                            <h3>InternTrack <span>AI</span></h3>
                        </div>
                        <p>
                            AI-powered internship verification, monitoring, and
                            analytics for modern institutions, companies, and students.
                        </p>
                        <div class="social">
                            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i class="fa-brands fa-github"></i></a>
                            <a href="#"><i class="fa-regular fa-envelope"></i></a>
                        </div>
                    </div>

                    <div class="footer-column">
                        <h4>Product</h4>
                        <a href="#">Features</a>
                        <a href="#">Roles</a>
                        <a href="#">AI Engine</a>
                        <a href="#">Impact</a>
                    </div>
                    <div class="footer-column">
                        <h4>Legal</h4>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                        <a href="#">Contact</a>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>© 2026 InternTrack AI · All rights reserved.</p>
                    <p>Built for authentic internships.</p>
                </div>
            </footer>
        </div>
    )
}

export default Login
