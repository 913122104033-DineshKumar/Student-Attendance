import React, { useEffect, useState } from 'react';
import 'cseb\src\assets\main.css';

function MainPage() {
  const [staff, setStaff] = useState('');
  const [semester, setSemester] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const staffName = localStorage.getItem('staffname');
    const semesterData = localStorage.getItem('semester');
    const dateData = localStorage.getItem('date');
    const timeData = localStorage.getItem('time');

    if (staffName && semesterData && dateData && timeData) {
      setStaff(staffName);
      setSemester(semesterData);
      setDate(dateData);
      setTime(timeData);

      const msg = "Welcome ${staffName}!...\nYou have Logged In Successfully !!";
      setMessage(msg);
    }
  }, []);

  return (
    <div id="imp">
      <div id="college" style={{ height: '143px' }}>
        <img id="vlogo" src="VCET Logo.jpg" alt="Image Not Found" />
        <img id="clogo" src="CSE LOGO.jpg" alt="Image Not Found" />
        <pre id="vcet">
          VELAMMAL COLLEGE OF ENGINEERING AND TECHNOLOGY
          AUTONOMOUS
          MADURAI
        </pre>
      </div>
      <hr />

      <pre id="dept">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</pre>
      <pre id="class">CLASS : CSE - B</pre>
      <pre id="batch">BATCH : 2023 -2027</pre>
      <hr style={{ position: 'relative', top: '-50px', border: '2px solid white' }} />

      {/* Display Section */}
      <div id="display">{message}</div>

      {/* Sidebar Section */}
      <div id="side">
        <div className="sbar"><a href="/student">Student Details</a></div>
        <br />
        <div className="sbar"><a href="/attendance">Attendance</a></div>
        <br />
        <div className="sbar"><a href="/absent">Absent Details</a></div>
      </div>
    </div>
  );
}

export default MainPage;