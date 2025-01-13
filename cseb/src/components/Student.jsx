import React from 'react';
import 'cseb\src\assets\student.css';  // Import the CSS file

function Student() {
  return (
    <div id="main">
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
      <hr style={{ position: 'relative', top: '-50px', border: '2px solid white', borderColor: 'white' }} />
      
      <h1>STUDENT DETAILS</h1>
      
      <div>
        <table id="table" border="1">
          <thead>
            <tr>
              <th rowspan="2">RELIGION</th>
              <th colSpan="5">BOYS</th>
              <th colSpan="5">GIRLS</th>
            </tr>
            <tr>
              <th>BC</th>
              <th>OBC</th>
              <th>MBC</th>
              <th>SC/ST</th>
              <th>Tot</th>
              <th>BC</th>
              <th>OBC</th>
              <th>MBC</th>
              <th>SC/ST</th>
              <th>Tot</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HINDU</td>
              <td>27</td> <td>-</td> <td>5</td> <td>2</td> <td>33</td>
              <td>22</td> <td>-</td> <td>3</td> <td>4</td> <td>28</td>
            </tr>
            <tr>
              <td>MUSLIM</td>
              <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td>
              <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td>
            </tr>
            <tr>
              <td>CHRISTIAN</td>
              <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td>
              <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td>
            </tr>
          </tbody>
        </table>
        
        <h2>TOTAL NO. OF BOYS : 35</h2>
        <h2>TOTAL NO. OF GIRLS : 29</h2>
        <h2>TOTAL NO. OF STUDENTS : 64</h2>
      </div>
      <a id="anc" href="II CSE B.pdf" download="II CSE B.pdf">Student List</a>
    </div>
  );
}

export default Student;