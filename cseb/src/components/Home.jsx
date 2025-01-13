import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'cseb\src\assets\input.css';

const staffData = {
  "I Semester": [
    "Ms. Lakshmi Priya",
    "Ms. V. Praveena",
    "Mr. R. Sathish Kumar",
    "Dr. B.K. Balachandhar",
    "Mr. M. Muralishankar",
    "Mr. G. Balamuralikrishnan"
  ],
  "II Semester": [
    "Mr. Sivam",
    "Ms. S. Benita",
    "Dr. M. Sornavalli",
    "Dr. D. Madhan",
    "Mr. M. Muralishankar",
    "Mr. G. Balamuralikrishnan",
    "Mrs. V. Umayal Muthu",
    "Mr. M. Karuppaiah Rajkumar"
  ],
  "III Semester": [
    "Mr. R. Sathish Kumar",
    "Mrs. A. Benazir Begum",
    "Mrs. D. Jansi Rani",
    "Dr. S. Senthil Kumar",
    "Mr. G. Balamuralikrishnan"
  ]
};

function Home() {
  const [semester, setSemester] = useState('');
  const [staff, setStaff] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
    setStaff(staffData[e.target.value] || []);
  };

  const handleSubmit = () => {
    if (semester && selectedStaff && date && time) {
      localStorage.setItem('staffname', selectedStaff);
      localStorage.setItem('semester', semester);
      localStorage.setItem('date', date);
      localStorage.setItem('time', time);
      navigate('/main');
    } else {
      alert('Please fill all input fields');
    }
  };

  return (
    <div id="main">
      <div style={{ height: '143px' }}>
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

      <h1>STUDENTS ATTENDANCE MANAGEMENT</h1>

      <div id="input">
        <label id="sem" htmlFor="semester">Semester: </label>
        <select id="semester" value={semester} onChange={handleSemesterChange}>
          <option value="">Select Semester</option>
          <option value="I Semester">I Semester</option>
          <option value="II Semester">II Semester</option>
          <option value="III Semester">III Semester</option>
        </select>

        <br />
        <br />

        <label id="stf" htmlFor="staff">Staff Name : </label>
        <select
          id="staff"
          value={selectedStaff}
          onChange={(e) => setSelectedStaff(e.target.value)}
        >
          <option value="">Select Staff Name</option>
          {staff.map((staffName, index) => (
            <option key={index} value={staffName}>
              {staffName}
            </option>
          ))}
        </select>

        <br />
        <br />

        <label id="dt" htmlFor="date">Date : </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <br />
        <br />

        <label id="hr" htmlFor="time">Period : </label>
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="I (9.00 - 9.50)">I (9.00 - 9.50)</option>
          <option value="II (9.50 - 10.40)">II (9.50 - 10.40)</option>
          <option value="III (11.00 - 11.50)">III (11.00 - 11.50)</option>
          <option value="IV (11.50 - 12.40)">IV (11.50 - 12.40)</option>
          <option value="V (1.20 - 2.10)">V (1.20 - 2.10)</option>
          <option value="VI (2.10 - 3.00)">VI (2.10 - 3.00)</option>
          <option value="VII (3.20 - 4.10)">VII (3.20 - 4.10)</option>
        </select>
      </div>

      <button id="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Home;