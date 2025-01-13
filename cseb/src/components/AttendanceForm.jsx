import React, { useEffect, useState } from 'react';
import 'cseb\src\assets\attendance.css';

const AttendanceForm = () => {
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');

  useEffect(() => {
    // Retrieve date and hour from localStorage if available
    const storedDate = localStorage.getItem('date');
    const storedHour = localStorage.getItem('time');

    setDate(storedDate || 'No date set');
    setHour(storedHour || 'No hour set');
  }, []);

  const handleSubmit = () => {
    let attendanceData = [];
    let allSelected = true;

    for (let i = 1; i <= 64; i++) {
      const radioButtons = document.querySelectorAll(`input[name="attendance${i}"]:checked`);
      if (!radioButtons.length) {
        allSelected = false;
        alert(`Please select an attendance option for student ${i}.`);
        break;
      }

      const attendanceStatus = radioButtons[0].value;
      const reason = document.getElementById(`reason${i}`).value;
      const row = document.querySelectorAll('tbody tr')[i - 1];
      const rollNumber = row.children[0].textContent;
      const studentName = row.children[1].textContent;

      if (attendanceStatus === 'absent' || attendanceStatus === 'leave' || attendanceStatus === 'onduty') {
        attendanceData.push({ rollNumber, name: studentName, status: attendanceStatus, reason });
      }
    }

    if (allSelected) {
      localStorage.setItem('attendanceData', JSON.stringify(attendanceData));
      window.location.href = 'main.html';
    }
  };

  const disableReason = (id) => {
    document.getElementById(`reason${id}`).disabled = true;
    document.getElementById(`reason${id}`).value = '';
  };

  const enableReason = (id) => {
    document.getElementById(`reason${id}`).disabled = false;
  };

  return (
    <div id="main">
      <div id="college" style={{ height: '143px' }}>
        <img id="vlogo" src="VCETLogo.jpg" alt="VCET Logo" />
        <img id="clogo" src="CSELogo.jpg" alt="CSE Logo" />
        <pre id="vcet">VELAMMAL COLLEGE OF ENGINEERING AND TECHNOLOGY
          AUTONOMOUS
          MADURAI</pre>
      </div>
      <hr />
      <h1>ENTER ATTENDANCE</h1>
      <h3>DATE: <span>{date}</span></h3>
      <h3 id="hr">HOUR: <span>{hour}</span></h3>

      <button id="button" onClick={handleSubmit}>Submit</button>

      <table>
        <thead>
          <tr>
            <th>Roll Num</th>
            <th>Name</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Leave</th>
            <th>On Duty</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(64)].map((_, index) => (
            <tr key={index}>
              <td>{`23CSEB${(index + 1).toString().padStart(2, '0')}`}</td>
              <td>{`Student ${index + 1}`}</td>
              <td><input type="radio" name={`attendance${index + 1}`} value="present" onClick={() => disableReason(index + 1)} /></td>
              <td><input type="radio" name={`attendance${index + 1}`} value="absent" onClick={() => enableReason(index + 1)} /></td>
              <td><input type="radio" name={`attendance${index + 1}`} value="leave" onClick={() => enableReason(index + 1)} /></td>
              <td><input type="radio" name={`attendance${index + 1}`} value="onduty" onClick={() => enableReason(index + 1)} /></td>
              <td><textarea id={`reason${index + 1}`} disabled></textarea></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceForm;
