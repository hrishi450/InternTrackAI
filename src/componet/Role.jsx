import React from 'react'
import { GraduationCap, UserCheck, BuildingComplex, UserStar, CircleCheck } from 'lucide-react'
const Role = () => {
    return (
        <div>

            <div className="role">
                <div className="role1">
                    <h5>Role-based Dashboard</h5>
                    <h2>Built for every stakeholder</h2>
                    <h4>Purpose-crafted experiences with the right permissions for each role.</h4>
                </div>

                <div className="role2">
                    <div className="box1">
                        <div className="i1"><GraduationCap size={36} color="#ffff" /></div>
                        <h3>Student</h3>
                        <div className="i2">
                            <CircleCheck size={16} color="#025500" strokeWidth={2} />
                            <h5>Resume + AI ATS score</h5>
                        </div>
                        <div className="i2"> <CircleCheck size={16} color="#025500" strokeWidth={2} />
                            <h5>Daily logbook & attendance</h5>
                        </div>
                        <div className="i2"> <CircleCheck size={22} color="#025500" strokeWidth={2} />
                            <h5>Skill growth & placement prediction</h5>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="i1"><UserCheck size={36} color="#ffffff" /></div>
                        <h3>Mentor</h3>
                        <div className="i2"><h2><CircleCheck size={16} color="#025500" strokeWidth={2} /></h2>
                            <h5>Assigned Student</h5>
                        </div>
                        <div className="i2"><h2><CircleCheck size={16} color="#025500" strokeWidth={2} /></h2>
                            <h5>Approved Daily Report</h5>
                        </div>
                        <div className="i2"><h2><CircleCheck size={16} color="#025500" strokeWidth={2} /></h2>
                            <h5>Performance Reviews</h5>
                        </div>
                    </div>
                    <div className="box3">
                        <div className="i1"><BuildingComplex size={36} color="#ffffff" /></div>
                        <h3>Company</h3>
                        <div className="i2"><h2><CircleCheck size={16} color="#025500" strokeWidth={2} /></h2>
                            <h5>Post Internship</h5>
                        </div>
                        <div className="i2"><h2><CircleCheck size={16} color="#025500" strokeWidth={2} /></h2>
                            <h5>Assigned task & Mentors</h5>
                        </div>
                        <div className="i2"><h2><CircleCheck size={16} color="#025500" strokeWidth={2} /></h2>
                            <h5>Generate Certificate</h5>
                        </div>
                    </div>
                    <div className="box4">
                        <div className="i1"><UserStar size={36} color="#ffffff" /></div>
                        <h3>College Admin</h3>
                        <div className="i2"><h2><CircleCheck size={16} color="#025500" strokeWidth={2} /></h2>
                            <h5>Verify Company</h5>
                        </div>
                        <div className="i2"><h2><CircleCheck size={16} color="#025500" strokeWidth={2} /></h2>
                            <h5>Department Analytics</h5>
                        </div>
                        <div className="i2"><h2><CircleCheck size={16} color="#025500" strokeWidth={2} /></h2>
                            <h5>Fraud Alerts & Exports</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Role
