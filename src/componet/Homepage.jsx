import React from 'react'
// import { Dot } from 'lucide-react'
import { MoveRight, CircleCheck, Video } from 'lucide-react'
import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <div >
            <div className="homepage">
                <div className="heading">
                    <div className="textline">
                        <div className="dot"><Dot size={50} color="#00ff00" strokeWidth={3} /></div>
                        <h5>Introducing InternTrack AI · v1.0</h5>
                    </div>
                    <h1>Smart Internship</h1>
                    <h2>Management<i>Powered by AI</i></h2>

                    <div className="heading2">
                        <h3>Verify. Monitor. Analyze. Empower. The intelligent platform that fake internships and delivers
                            real-time insights for colleges, companies, and students.
                        </h3>

                        <div className="heading3">
                            <div className="btn1">
                                <Link to="/login" className='sign2' >
                                    <h4> Get started
                                        <MoveRight /></h4>
                                </Link>
                            </div>
                            <div className="btn2">
                                <h6><Video /></h6>
                                <h4>Watch a Demo</h4>
                            </div>
                        </div>
                        <div className="heading4">
                            <h5><CircleCheck size={16} color="#025500" strokeWidth={2} />AI Document Verification</h5>
                            <h5><CircleCheck size={16} color="#025500" strokeWidth={2} /> Geo Attendance</h5>
                            <h5><CircleCheck size={16} color="#025500" strokeWidth={2} /> Real-time Analytics</h5>
                        </div>
                    </div >
                </div>
            </div>
        </div >
    )
}
import { Dot, Form, Import } from 'lucide-react'
import Login from './Login'

export default Homepage
