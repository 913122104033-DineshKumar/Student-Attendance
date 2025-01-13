import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components (pages)
import Home from './components/Home';
import Main from './components/Main';
import MainPage from './components/MainPage';
import Student from './components/Student';
import AttendanceForm from './components/AttendanceForm';
import AbsentDetails from './components/AbsentDetails';

// Importing CSS for styling
import './css/main.css'; // Assuming you have a global style

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar - You can add links or navigation menu here */}
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/main">Main</a></li>
            <li><a href="/mainpage">MainPage</a></li>
            <li><a href="/student">Student</a></li>
            <li><a href="/attendance">Attendance Form</a></li>
            <li><a href="/absentdetails">Absent Details</a></li>
          </ul>
        </nav>

        {/* Defining Routes for Different Pages */}
        <Routes>
          {/* Route for Home Page */}
          <Route path="/" element={<Home />} />

          {/* Route for Main Page */}
          <Route path="/main" element={<Main />} />

          {/* Route for MainPage */}
          <Route path="/mainpage" element={<MainPage />} />

          {/* Route for Student Page */}
          <Route path="/student" element={<Student />} />

          {/* Route for Attendance Form */}
          <Route path="/attendance" element={<AttendanceForm />} />

          {/* Route for Absent Details */}
          <Route path="/absentdetails" element={<AbsentDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;