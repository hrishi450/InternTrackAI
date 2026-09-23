import React from 'react'
import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
    GraduationCap,
    Building,
    UserShield,
    ShieldCheck,
    Mail,
    Lock,
    User,
    Phone,
    Search
} from 'lucide-react'

function Registration() {

    const handleLogin = (e) => {
        e.preventDefault()

        localStorage.setItem('userRole', role)

        const email = document.getElementById('email').value

        localStorage.setItem('userEmail', email)

        navigate(`/StudentDash/${role}`)
    }

    const { role } = useParams()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('login')
    const roleData = {
        student: {
            title: 'Student Portal',
            description: 'Track internships, logbook, resume score & placement',
            accessTitle: 'Student access',
            accessDescription: 'Secure sign in to your dashboard',
            loginButton: 'Sign in as Student',
            registerButton: 'Create Student account',
            icon: <GraduationCap />,
            features: [
                'JWT-secured sessions',
                'Role-based dashboard access',
                'AI-assisted verification'
            ]
        },

        company: {
            title: 'Company Portal',
            description: 'Post internships, manage applicants, issue certificates',
            accessTitle: 'Company access',
            accessDescription: 'Secure sign in to your company dashboard',
            loginButton: 'Sign in as Company',
            registerButton: 'Create Company account',
            icon: <Building />,
            features: [
                'JWT-secured sessions',
                'Role-based dashboard access',
                'Applicant management'
            ]
        },

        college: {
            title: 'College Portal',
            description: 'Approve, verify & analyze department outcomes',
            accessTitle: 'College Admin access',
            accessDescription: 'Secure sign in to your college dashboard',
            loginButton: 'Sign in as College Admin',
            registerButton: 'Create College account',
            icon: <Building />,
            features: [
                'JWT-secured sessions',
                'Role-based dashboard access',
                'Department analytics'
            ]
        },

        mentor: {
            title: 'Mentor Portal',
            description: 'Guide students, verify attendance & review progress',
            accessTitle: 'Mentor access',
            accessDescription: 'Secure sign in to your mentor dashboard',
            loginButton: 'Sign in as Mentor',
            registerButton: 'Create Mentor account',
            icon: <UserShield />,
            features: [
                'JWT-secured sessions',
                'Role-based dashboard access',
                'Student progress tracking'
            ]
        },

        superadmin: {
            title: 'Super Admin Portal',
            description: 'Global system, AI models, audit & analytics',
            accessTitle: 'Super Admin access',
            accessDescription: 'Secure sign in to your admin dashboard',
            loginButton: 'Sign in as Super Admin',
            registerButton: 'Create Super Admin account',
            icon: <ShieldCheck />,
            features: [
                'JWT-secured sessions',
                'Full system access',
                'AI models & analytics'
            ]
        }
    }

    const currentRole = roleData[role]

    if (!currentRole) {
        return (
            <div className="auth-page">
                <main className="auth-main">
                    <section className="login-card">
                        <h2>Invalid role</h2>
                        <p>Please choose a valid role.</p>
                        <Link to="/login">Back to Login</Link>
                    </section>
                </main>
            </div>
        )
    }

    return (
        <div className="auth-page">

            <header className="auth-header">

                <Link to="/" className="back-home">
                    ← Back to home
                </Link>

                <div className="auth-logo"
                >

                    <span>InternTrack AI</span>
                </div>

            </header>

            <Link to="/login" className="choose-role">
                ← Choose a different role
            </Link>

            <main className="auth-main">

                <section className="portal-info" id="portalInfo">

                    <div className="big-icon" id="portalIcon">
                        {currentRole.icon}
                    </div>

                    <h1 id="portalTitle">
                        {currentRole.title}
                    </h1>

                    <p id="portalDescription">
                        {currentRole.description}
                    </p>

                    <ul id="portalFeatures">
                        {currentRole.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>

                </section>

                <section className="login-card">

                    <div className="login-heading">

                        <div className="small-icon" id="loginIcon">
                            {currentRole.icon}
                        </div>

                        <div>
                            <h2 id="loginTitle">
                                {currentRole.accessTitle}
                            </h2>

                            <p id="loginDescription">
                                {currentRole.accessDescription}
                            </p>
                        </div>

                    </div>

                    <div className="auth-tabs">

                        <button
                            className={activeTab === 'login' ? 'active' : ''}
                            id="signInTab"
                            type="button"
                            onClick={() => setActiveTab('login')}
                        >
                            Sign in
                        </button>

                        <button
                            className={activeTab === 'register' ? 'active' : ''}
                            id="registerTab"
                            type="button"
                            onClick={() => setActiveTab('register')}
                        >
                            Register
                        </button>

                    </div>

                    <form
                        id="loginForm"
                        onSubmit={handleLogin}
                        className={activeTab === 'register' ? 'hidden' : ''}
                    >

                        <label>Email</label>

                        <div className="input-box">
                            <Mail />

                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div id="error">
                            <h5>email Error</h5>
                        </div>

                        <label>Password</label>

                        <div className="input-box">
                            <Lock />

                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div id="passerror">
                            <h5>password Error</h5>
                        </div>

                        <div className="login-options">

                            <label className="remember">

                                <input type="checkbox" />

                                <span>Remember me</span>

                            </label>

                            <a href="#">
                                Forgot password?
                            </a>

                        </div>

                        <button
                            type="submit"
                            className="login-btn"
                            id="loginButton"
                        >
                            {currentRole.loginButton}
                        </button>

                    </form>

                    <form
                        id="registerForm"
                        className={activeTab === 'login' ? 'hidden' : ''}
                    >

                        <label>Full name</label>

                        <div className="input-box">

                            <User />

                            <input
                                type="text"
                                placeholder="Your name"
                                required
                            />

                        </div>

                        <div className="two-inputs">

                            <div>

                                <label>Phone</label>

                                <div className="input-box">

                                    <Phone />

                                    <input
                                        type="tel"
                                        placeholder="+91 555..."
                                        required
                                    />

                                </div>

                            </div>

                            <div>

                                <label>Email</label>

                                <div className="input-box">

                                    <Mail />

                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                    />

                                </div>

                            </div>

                        </div>

                        <label>Password</label>

                        <div className="input-box">
                            <Lock />
                            <input
                                type="password"
                                placeholder="Min 8 characters"
                                minLength="8"
                                required
                            />
                        </div>
                        <p className="terms-text" id="termsText">
                            By registering you agree to our terms.
                            New {role} accounts may require admin approval.

                        </p>
                        <button
                            type="submit"
                            className="login-btn"
                            id="registerButton"
                        >
                            {currentRole.registerButton}
                        </button>
                    </form>
                    <div className="or">
                        <span>or</span>
                    </div>
                    <button className="google-btn">
                        <span>G </span>
                        Continue with Google
                    </button>
                </section>

            </main>

            <footer className="auth-footer">

                <span>InternTrack AI</span>

                <span>Legal</span>

            </footer>

        </div>
    )
}

export default Registration