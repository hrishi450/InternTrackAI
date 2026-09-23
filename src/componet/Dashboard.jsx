import React from 'react'
import { Bot, Badge, Sparkles } from 'lucide-react'
function Dashboard() {
    return (
        <div>
            <div class="Dashboard">
                <div class="mouse-glow"></div>
                <div class="left">
                    <div class="ai-engine">
                        <Bot size={20} color="#000000" />
                        <h6>AI Engine</h6>
                    </div>
                    <div class="head-1">
                        <h1>Intelligence that</h1>
                        <i>works for you</i>
                    </div>
                    <div class="head-2">
                        <h4>From document verification to placement prediction, our AI stack analyzes reports, detects fraud,
                            and coaches students in real-time.</h4>
                    </div>
                    <div class="head-3">
                        <div class="sub-1">
                            <h4><Badge size={18} color="#1A90FF" /></h4>
                            <h5>Document Verification</h5>
                        </div>
                        <div class="sub-1">
                            <h4><Badge size={18} color="#1A90FF" /></h4>
                            <h5>Report Analyzer</h5>
                        </div>
                        <div class="sub-1">
                            <h4><Badge size={18} color="#1A90FF" /></h4>
                            <h5>Resume ATS</h5>
                        </div>
                        <div class="sub-1">
                            <h4><Badge size={18} color="#1A90FF" /></h4>
                            <h5>Skill Gap</h5>
                        </div>
                        <div class="sub-1">
                            <h4><Badge size={18} color="#1A90FF" /></h4>
                            <h5>Placement prediction</h5>
                        </div>
                        <div class="sub-1">
                            <h4><Badge size={18} color="#1A90FF" /></h4>
                            <h5>AI Chat Assistant</h5>
                        </div>
                    </div>
                </div>
                <div class="prediction-box">
                    <div class="predictor-header">
                        <div class="predictor-title">
                            <h2> <Sparkles color="#3F8EF5" /></h2>
                            <span>AI Placement Predictor</span>
                            <div class="live">
                                Live
                            </div>
                        </div>
                    </div>
                    <div class="stat">
                        <div class="stat-top">
                            <span>Placement chance</span>
                            <strong>87%</strong>
                        </div>
                        <div class="progress">
                            <div class="progress-fill placement"></div>
                        </div>
                    </div>
                    <div class="stat">
                        <div class="stat-top">
                            <span>Expected salary</span>
                            <strong>₹ 9.2 LPA</strong>
                        </div>
                        <div class="progress">
                            <div class="progress-fill salary"></div>
                        </div>
                    </div>
                    <div class="stat">

                        <div class="stat-top">
                            <span>Skill match</span>
                            <strong>Frontend · React</strong>
                        </div>

                        <div class="progress">
                            <div class="progress-fill skill"></div>
                        </div>

                    </div>

                    <div class="stat">

                        <div class="stat-top">
                            <span>Missing skills</span>
                            <strong>System design · DevOps</strong>
                        </div>

                        <div class="progress">
                            <div class="progress-fill missing"></div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Dashboard
