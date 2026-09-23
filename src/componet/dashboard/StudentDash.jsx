import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
    House,
    Briefcase,
    Book,
    CalendarCheck,
    FileText,
    Award,
    ChartLine,
    Plus,
    Users,
    UserRound,
    CircleCheck,
    Star,
    MessageSquare,
    Building,
    School,
    Bot,
    ListChecks,
    WandSparkles,
    LogOut,
    Sparkle
} from 'lucide-react'

import Styles from './Dash.module.css'

function StudentDash() {

    const { role } = useParams()
    const navigate = useNavigate()

    const [activeMenu, setActiveMenu] = useState(0)

    const data = {
        student: {
            name: "Student",
            title: "Student Dashboard",
            subtitle: "Track your internship journey",
            menu: [["Overview", "fa-house"], ["My Internship", "fa-briefcase"], ["Daily Logbook", "fa-book"], ["Attendance", "fa-calendar-check"], ["Resume & AI Score", "fa-file-lines"], ["Certificates", "fa-certificate"], ["Placement Predictor", "fa-chart-line"]],
            stats: [["ATTENDANCE", "94%", "+2% this week"], ["LOGBOOK STREAK", "12 days", "Active streak"], ["AI RESUME SCORE", "82/100", "Strong"], ["PLACEMENT CHANCE", "76%", "AI-predicted"]],
            mainTitle: "CURRENT INTERNSHIP",
            mainName: "Frontend Developer Intern",
            mainInfo: "Acme Cloud • Remote • 12 weeks",
            progress: 50,
            tasks: ["Complete landing page redesign", "Submit weekly logbook", "Peer review sprint tasks", "Mentor sync — Friday"],
            side: [["AI RESUME SCORE", "82", "Add 2 projects to reach 90+"], ["CERTIFICATES", "Web Dev Bootcamp|Cloud Fundamentals", ""], ["PLACEMENT PREDICTOR", "76% chance of placement", ""]]
        },

        company: {
            name: "Company",
            title: "Company Dashboard",
            subtitle: "Manage internships and applicants",
            menu: [["Overview", "fa-house"], ["Post Internship", "fa-plus"], ["My Internships", "fa-briefcase"], ["Applicants", "fa-users"], ["Students", "fa-user-graduate"], ["Certificates", "fa-certificate"], ["Analytics", "fa-chart-line"]],
            stats: [["ACTIVE INTERNSHIPS", "12", "3 new this month"], ["APPLICATIONS", "248", "+18% this week"], ["SHORTLISTED", "64", "Active candidates"], ["CERTIFICATES", "37", "Issued this month"]],
            mainTitle: "CURRENT INTERNSHIPS",
            mainName: "Frontend Developer Internship",
            mainInfo: "Remote • 12 weeks • 4 positions",
            progress: 70,
            tasks: ["Review new applications", "Schedule student interviews", "Verify internship documents", "Issue pending certificates"],
            side: [["APPLICATIONS", "248", "18 new applications"], ["ACTIVE POSTS", "12", "3 closing this week"], ["HIRING STATUS", "64 shortlisted", "Review candidates"]]
        },

        college: {
            name: "College Admin",
            title: "College Admin Dashboard",
            subtitle: "Manage students and internship outcomes",
            menu: [["Overview", "fa-house"], ["Students", "fa-user-graduate"], ["Internships", "fa-briefcase"], ["Verification", "fa-circle-check"], ["Attendance", "fa-calendar-check"], ["Analytics", "fa-chart-line"], ["Reports", "fa-file-lines"]],
            stats: [["TOTAL STUDENTS", "1,248", "+42 this semester"], ["ACTIVE INTERNSHIPS", "386", "Across departments"], ["VERIFIED", "91%", "+4% this month"], ["PLACEMENT RATE", "78%", "Current batch"]],
            mainTitle: "INTERNSHIP OVERVIEW",
            mainName: "Student Internship Program",
            mainInfo: "386 active students • 42 companies",
            progress: 78,
            tasks: ["Verify pending internships", "Review attendance reports", "Approve student certificates", "Generate placement report"],
            side: [["STUDENTS", "1,248", "42 new registrations"], ["VERIFICATION", "91% verified", "27 pending"], ["PLACEMENT", "78%", "Current batch"]]
        },

        mentor: {
            name: "Mentor",
            title: "Mentor Dashboard",
            subtitle: "Guide students and review progress",
            menu: [["Overview", "fa-house"], ["My Students", "fa-users"], ["Daily Logbook", "fa-book"], ["Attendance", "fa-calendar-check"], ["Reviews", "fa-star"], ["Progress", "fa-chart-line"], ["Messages", "fa-message"]],
            stats: [["MY STUDENTS", "28", "+4 this month"], ["ATTENDANCE", "93%", "+3% this week"], ["REVIEWS", "42", "8 pending"], ["PROGRESS", "86%", "Average progress"]],
            mainTitle: "STUDENT PROGRESS",
            mainName: "Frontend Development Group",
            mainInfo: "28 students • 12 week program",
            progress: 86,
            tasks: ["Review student logbooks", "Complete weekly reviews", "Verify attendance", "Schedule mentor meetings"],
            side: [["STUDENTS", "28", "4 new students"], ["REVIEWS", "42", "8 pending reviews"], ["PROGRESS", "86%", "Average progress"]]
        },

        superadmin: {
            name: "Super Admin",
            title: "Super Admin Dashboard",
            subtitle: "Manage the global InternTrack AI system",
            menu: [["Overview", "fa-house"], ["Users", "fa-users"], ["Companies", "fa-building"], ["Colleges", "fa-school"], ["AI Models", "fa-robot"], ["Audit Logs", "fa-list-check"], ["Analytics", "fa-chart-line"]],
            stats: [["TOTAL USERS", "18,420", "+8.4% this month"], ["COMPANIES", "486", "12 new"], ["COLLEGES", "94", "3 new"], ["SYSTEM HEALTH", "99.9%", "Operational"]],
            mainTitle: "SYSTEM OVERVIEW",
            mainName: "InternTrack AI Platform",
            mainInfo: "18,420 users • 486 companies • 94 colleges",
            progress: 99,
            tasks: ["Review system activity", "Approve new organizations", "Monitor AI models", "Check audit logs"],
            side: [["TOTAL USERS", "18,420", "8.4% growth"], ["AI MODELS", "12", "All operational"], ["SYSTEM HEALTH", "99.9%", "Operational"]]
        }
    }

    const current = data[role] || data.student

    const getIcon = (icon) => {

        const icons = {
            "fa-house": <House />,
            "fa-briefcase": <Briefcase />,
            "fa-book": <Book />,
            "fa-calendar-check": <CalendarCheck />,
            "fa-file-lines": <FileText />,
            "fa-certificate": <Award />,
            "fa-chart-line": <ChartLine />,
            "fa-plus": <Plus />,
            "fa-users": <Users />,
            "fa-user-graduate": <UserRound />,
            "fa-circle-check": <CircleCheck />,
            "fa-star": <Star />,
            "fa-message": <MessageSquare />,
            "fa-building": <Building />,
            "fa-school": <School />,
            "fa-robot": <Bot />,
            "fa-list-check": <ListChecks />
        }

        return icons[icon] || <House />
    }
    const renderSide = (item) => {

        if (item[0] === "AI RESUME SCORE") {

            return (
                <div className={Styles["side-card"]}>

                    <div className={Styles["side-title"]}>
                        {item[0]}
                    </div>

                    <div className={Styles.score}>

                        <div className={Styles["score-icon"]}>
                            <WandSparkles />
                        </div>

                        <div>
                            <strong>{item[1]}</strong>
                            <p>{item[2]}</p>
                        </div>

                    </div>

                    <button className={Styles["upload-btn"]}>
                        Upload new resume
                    </button>

                </div>
            )
        }

        if (item[1].includes("|")) {

            const list = item[1].split("|")

            return (
                <div className={Styles["side-card"]}>

                    <div className={Styles["side-title"]}>
                        {item[0]}
                    </div>

                    {list.map((x, index) => (

                        <div
                            className={Styles["list-item"]}
                            key={index}
                        >
                            <CircleCheck />
                            {x}
                        </div>

                    ))}

                </div>
            )
        }

        return (
            <div className={Styles["side-card"]}>

                <div className={Styles["side-title"]}>
                    {item[0]}
                </div>

                <div className={Styles.predictor}>
                    {item[1]}
                </div>

                {item[2] && (
                    <p className={Styles.predictor}>
                        {item[2]}
                    </p>
                )}

            </div>
        )
    }

    const logout = () => {
        navigate("/")
    }


    return (
        <div className={Styles.dashboard}>

            <aside className={Styles.sidebar}>

                <div className={Styles.brand}>

                    <div className={Styles["brand-icon"]}>
                        <Sparkle />
                    </div>

                    <span>
                        InternTrack <b>AI</b>
                    </span>

                </div>

                <div className={Styles["role-label"]} id="roleLabel">
                    {current.name.toUpperCase()}
                </div>

                <nav id="sidebarMenu" className={Styles.sidebarMenu}>

                    {current.menu.map((item, index) => (

                        <a
                            href="#"
                            key={index}
                            className={activeMenu === index ? Styles.active : ""}
                            onClick={(e) => {
                                e.preventDefault()
                                setActiveMenu(index)
                            }}
                        >

                            {getIcon(item[1])}

                            <span>
                                {item[0]}
                            </span>

                        </a>

                    ))}

                </nav>

                <div className={Styles["sidebar-bottom"]}>

                    <p id="userEmail">
                        you@example.com
                    </p>

                    <button
                        id="logoutBtn"
                        onClick={logout}
                    >
                        <LogOut />
                        Sign out
                    </button>

                </div>

            </aside>

            <main className={Styles.main}>

                <header className={Styles.topbar}>

                    <div>

                        <h1 id="dashboardTitle">
                            {current.title}
                        </h1>

                        <p id="dashboardSubtitle">
                            {current.subtitle}
                        </p>

                    </div>

                    <div className={Styles.welcome}>

                        <CircleCheck />

                        <span id="welcomeText">
                            Welcome back, {current.name}
                        </span>

                    </div>

                </header>

                <section className={Styles.stats} id="stats">

                    {current.stats.map((item, index) => (

                        <div className={Styles["stat-card"]} key={index}>

                            <small>
                                {item[0]}
                            </small>

                            <div className={Styles["stat-value"]}>
                                {item[1]}
                            </div>

                            <div className={Styles["stat-change"]}>
                                {item[2]}
                            </div>

                        </div>

                    ))}

                </section>

                <section className={Styles["dashboard-grid"]}>

                    <div className={Styles["main-column"]}>

                        <div
                            className={`${Styles.card} ${Styles["internship-card"]}`}
                            id="mainContent"
                        >

                            <div className={Styles["card-title"]}>
                                {current.mainTitle}
                            </div>

                            <div className={Styles["internship-name"]}>
                                {current.mainName}
                            </div>

                            <div className={Styles["internship-info"]}>
                                {current.mainInfo}
                            </div>

                            <div className={Styles["progress-row"]}>

                                <span>
                                    Progress
                                </span>

                                <span>
                                    {current.progress}%
                                </span>

                            </div>

                            <div className={Styles.progress}>

                                <span
                                    style={{
                                        width: `${current.progress}%`
                                    }}
                                ></span>

                            </div>

                        </div>

                        <div
                            className={`${Styles.card} ${Styles["tasks-card"]}`}
                            id="tasks"
                        >

                            <div className={Styles["card-title"]}>
                                WEEKLY TASKS
                            </div>

                            {current.tasks.map((task, index) => (

                                <div
                                    className={Styles.task}
                                    key={index}
                                >

                                    <span>
                                        {task}
                                    </span>

                                    <button>
                                        Mark done
                                    </button>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div
                        className={Styles["right-column"]}
                        id="rightContent"
                    >

                        {current.side.map((item, index) => (
                            <React.Fragment key={index}>
                                {renderSide(item)}
                            </React.Fragment>
                        ))}

                    </div>

                </section>

            </main>

        </div>
    )
}

export default StudentDash