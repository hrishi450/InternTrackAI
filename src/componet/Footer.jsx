import { SparkleIcon } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="brand-name">
                            <div className="brand-icon">
                                <SparkleIcon />
                            </div>
                            <h3>InternTrack <span>AI</span></h3>
                        </div>
                        <p>
                            AI-powered internship verification, monitoring, and
                            analytics for modern institutions, companies, and students.
                        </p>
                        <div className="social">

                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Product</h4>
                        <a href="#">Features</a>
                        <a href="#">Roles</a>
                        <a href="#">AI Engine</a>
                        <a href="#">Impact</a>
                    </div>
                    <div className="footer-column">
                        <h4>Legal</h4>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                        <a href="#">Contact</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 InternTrack AI · All rights reserved.</p>
                    <p>Built for authentic internships.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
