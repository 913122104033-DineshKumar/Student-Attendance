import React, { useEffect, useState } from 'react';
import 'cseb\src\assets\input.css';

function Main() {
  const [attendanceData, setAttendanceData] = useState({
    staffname: '',
    semester: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    const staffname = localStorage.getItem('staffname');
    const semester = localStorage.getItem('semester');
    const date = localStorage.getItem('date');
    const time = localStorage.getItem('time');
    
    if (staffname && semester && date && time) {
      setAttendanceData({ staffname, semester, date, time });
    } else {
      window.location.href = '/'; // Redirect to Home if no data exists
    }
  }, []);

  return (
    <div>
      <h1>Attendance Details</h1>
      <p>Staff Name: {attendanceData.staffname}</p>
      <p>Semester: {attendanceData.semester}</p>
      <p>Date: {attendanceData.date}</p>
      <p>Period: {attendanceData.time}</p>
    </div>
  );
}

export default Main;
