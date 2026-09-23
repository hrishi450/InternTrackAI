import React from 'react'

import Navbar from './componet/navbar'
import Homepage from './componet/Homepage'
import video from './assets/Create_a_premium_cinematic_pro.mp4'
import Feature from './componet/Feature'
import Role from './componet/Role'
import Stats from './componet/Stats.jsx'
import Dashboard from './componet/Dashboard.jsx'
import Feedback from './Feedback.jsx'
import Lastpage from './componet/Lastpage.jsx'
import Footer from './componet/Footer.jsx'
import Login from './componet/Login.jsx'
import Registration from './componet/Registration.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentDash from './componet/dashboard/StudentDash.jsx'


function Home() {
  return (
    <>
      <Navbar />
      <Homepage />

      <div className="video">
        <video
          src={video}
          controls
          autoPlay
          muted
          loop
        />
      </div>

      <Feature />
      <Role />
      <Stats />
      <Dashboard />
      <Feedback />
      <Lastpage />
      <Footer />
    </>
  )
}


function App() {
  return (
    <BrowserRouter basename="/InternTrackAI">


      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/registration/:role"
          element={<Registration />}
        />

        <Route
          path="/StudentDash/:role"
          element={<StudentDash />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App