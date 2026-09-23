import React from 'react'
import { ShieldCheck, ChartColumn, Monitor, ShieldAlert, Award, MapPin, File, Brain } from 'lucide-react'
function Feature() {
    return (
        <div>
            <div className="features">
                <div className="fea-1">
                    <h5>Features</h5>
                </div>
                <div className="fea-2">
                    <h4>Everything you need to run</h4>
                    <i>authentic internships</i>
                    <h5>From verification to analytics — one intelligent platform for every stakeholder.</h5>
                </div>
                <div className="fea-3">
                    <div className="boxes-1">
                        <div className="box1">
                            <div className="cover"><ShieldCheck size={24} color="#0516ff" strokeWidth={2} /></div>
                            <h4>AI Verification</h4>
                            <h6>Detect fake offer letters and certificates with OCR + QR analysis.</h6>
                        </div>
                        <div className="box2">
                            <div className="cover"><Monitor size={24} color="#00BC7B" strokeWidth={2} /></div>
                            <h4>Real-time Monitoring</h4>
                            <h6>Live student progress,attendance,and task completion at a glance.</h6>
                        </div>
                        <div className="box3">
                            <div className="cover"><ChartColumn color="#00BC7B" /></div>
                            <h4>Analytics Dashboard</h4>
                            <h6>Department, company, and student-level insights with beautiful charts.</h6>
                        </div>
                        <div className="box4">
                            <div className="cover"><ShieldAlert color="#ED4857" strokeWidth={2} /></div>
                            <h4>Fraud Detection</h4>
                            <h6>Automatic alerts for duplicate reports, edited documents,and fake companies.</h6>
                        </div>
                    </div>


                    <div className="boxes-2">
                        <div className="box1">
                            <div className="cover"><Award color="#0516ff" /></div>
                            <h4>Certificate Verification</h4>
                            <h6>QR-signed certificates with a public verification page.by upload your certificates</h6>
                        </div>
                        <div className="box2">
                            <div className="cover"><MapPin color="#00BC7B" strokeWidth={2} /></div>
                            <h4>Geo Attendance</h4>
                            <h6>Location-verified check-ins ready for face recognition,live attendance check</h6>
                        </div>
                        <div className="box3">
                            <div className="cover"><File color="#00BC7B" strokeWidth={2} /></div>
                            <h4>Live Reports</h4>
                            <h6>Daily, weekly, monthly reports — exportable to PDF and Excel. updates daily reports</h6>
                        </div>
                        <div className="box4">
                            <div className="cover"><Brain color="#ED4857" strokeWidth={2} /></div>
                            <h4>AI Skill Analysis</h4>
                            <h6>Track skill growth from  application through placement prediction.Improve your AI Skill
                            </h6>
                        </div>
                    </div>
                </div>
            </div>                         </div>

    )
}
import { Form, Import } from 'lucide-react'

export default Feature
