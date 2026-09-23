import React from 'react'
import { Star } from 'lucide-react'



function Feedback() {
    return (
        <div>
            <div className="testimonials">
                <div className="test-badge">
                    <h5>Loved by teams</h5>
                </div>

                <h2 className="test-heading">Trusted by leading institutions</h2>

                <div className="test-cards">
                    <div className="test-card">
                        <div className="stars">
                            <Star color="#FFB400" />
                            <Star color="#FFB400" />
                            <Star color="#FFB400" />
                            <Star color="#FFB400" />
                            <Star color="#FFB400" />
                        </div>
                        <p className="quote">"InternTrack AI transformed how we verify and monitor internships. Fraud dropped to
                            near zero."</p>
                        <div className="author">
                            <div className="avatar" style={{ background: "#3061EF" }}>DA</div>
                            <div className="author-info">
                                <h4>Dr. Anjali Deshmukh</h4>
                                <p>Dean, PICT</p>
                            </div>
                        </div>
                    </div>

                    <div className="test-card">
                        <div className="stars">
                            <Star color="#FFB400" />
                            <Star color="#FFB400" />
                            <Star color="#FFB400" />
                            <Star color="#FFB400" />
                            <Star color="#FFB400" />
                        </div>
                        <p className="quote">"The analytics and AI insights help us guide students with data, not guesswork."</p>
                        <div className="author">
                            <div className="avatar" style={{ background: "#3061EF" }}>RS</div>
                            <div className="author-info">
                                <h4>Rohan Sharma</h4>
                                <p>TPO, VIT</p>
                            </div>
                        </div>
                    </div>

                    <div className="test-card">
                        <div className="stars">
                            <Star color="#FFB400" />
                            <Star color="#FFB400" />
                            <Star color="#FFB400" />
                            <Star color="#FFB400" />
                            <Star color="#FFB400" />

                        </div>
                        <p className="quote">"Assigning tasks and generating verified certificates has never been this seamless."
                        </p>
                        <div className="author">
                            <div className="avatar" style={{ background: "#3061EF" }}>PK</div>
                            <div className="author-info">
                                <h4>Priya Kulkarni</h4>
                                <p>HR, TechCorp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback
