
import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import 'cseb\src\assets\absent.css';

const AbsentDetails = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [staffName, setStaffName] = useState("");

  useEffect(() => {
    // Load attendance data from localStorage
    const data = JSON.parse(localStorage.getItem("attendanceData"));
    if (data) {
      setAttendanceData(data);
    }

    // Load date, hour, and staff name from localStorage
    setDate(localStorage.getItem("date") || "No date set");
    setHour(localStorage.getItem("time") || "No hour set");
    setStaffName(localStorage.getItem("staffname") || "No staff name set");
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();

    if (attendanceData.length === 0) {
      alert("No attendance data to save.");
      return;
    }

    doc.setFont("Times");
    doc.text("Attendance Report", 10, 10);
    doc.text(`Date: ${date}`, 10, 20);
    doc.text(`Hour: ${hour}`, 10, 30);
    doc.text(`Staff Name: ${staffName}`, 10, 40);

    let yPos = 50;
    doc.text("Roll Number", 10, yPos);
    doc.text("Name", 50, yPos);
    doc.text("Status", 110, yPos);
    doc.text("Reason", 160, yPos);
    doc.line(10, yPos + 2, 200, yPos + 2);
    yPos += 10;

    attendanceData.forEach((student) => {
      doc.text(student.rollNumber, 10, yPos);
      doc.text(student.name, 50, yPos);
      doc.text(student.status, 110, yPos);
      doc.text(student.reason || "No reason provided", 160, yPos);
      yPos += 10;
    });

    yPos += 20;
    doc.text("Mentor 1", 10, yPos);
    doc.text("Mentor 2", 60, yPos);
    doc.text("Class Incharge", 110, yPos);
    doc.text("HOD CSE", 160, yPos);

    const pdfBlob = doc.output("blob");
    const pdfURL = URL.createObjectURL(pdfBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = pdfURL;
    downloadLink.download = `Attendance_Report_${date}.pdf`;
    downloadLink.click();
  };

  return (
    <div id="absent">
      <div id="college" style={{ height: "143px" }}>
        <img id="vlogo" src="VCET Logo.jpg" alt="VCET Logo" />
        <img id="clogo" src="CSE LOGO.jpg" alt="CSE Logo" />
        <pre id="vcet">
          VELAMMAL COLLEGE OF ENGINEERING AND TECHNOLOGY
          AUTONOMOUS
          MADURAI
        </pre>
      </div>
      <hr />
      <pre id="dept">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</pre>
      <pre id="class">CLASS : CSE - B</pre>
      <pre id="batch">BATCH : 2023 - 2027</pre>
      <hr
        style={{
          position: "relative",
          top: "-50px",
          border: "2px solid white",
          borderColor: "white",
        }}
      />
      <h1>ABSENT DETAILS</h1>
      <h2 id="date">DATE : {date}</h2>
      <h2 id="hr">HOUR : {hour}</h2>
      <h2 id="staff">STAFF NAME : {staffName}</h2>
      <hr
        style={{
          position: "relative",
          top: "-180px",
          border: "2px solid white",
          borderColor: "white",
        }}
      />
      <div id="absentDetails">
        {attendanceData.length === 0 ? (
          <p>No students are marked as Absent, On Duty, or on Leave.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Roll Number</th>
                <th>Name</th>
                <th>Status</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((student, index) => (
                <tr key={index}>
                  <td>{student.rollNumber}</td>
                  <td>{student.name}</td>
                  <td>{student.status}</td>
                  <td>{student.reason || "No reason provided"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <button id="downloadLink" onClick={downloadPDF}>
        Download Attendance Details as PDF
      </button>
    </div>
  );
};

export default AbsentDetails;
