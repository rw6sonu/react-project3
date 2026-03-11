import { useState } from "react";
import StudentForm from "./components/StudentForm";
import Studentlist from "./components/Studentlist";
import "./App.css";

function App() {

  const [students, setStudents] = useState([]);

  const addStudent = (name) => {
    const newStudent = {
      id: Date.now(),
      name,
      status: "Absent"
    };

    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const markStatus = (id, status) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, status } : s
    );
    setStudents(updated);
  };

  const presentCount = students.filter(s => s.status === "Present").length;
  const absentCount = students.filter(s => s.status === "Absent").length;

  return (
    <>
      <div className="container" style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>

        <h1 className="title" style={{ textAlign: "center", marginBottom: "20px" }}> Student Activity Manager</h1>

        <div className="dashboard" style={{ display: "flex", gap: "15px", justifyContent: "center", marginBottom: "20px" }}>
          <div className="card" style={{color:"white",borderRadius:"10px",boxShadow:"0 2px 6px rgba(255, 255, 255, 0.1)"}}>Total Students: {students.length}</div>
          <div className="card present" style={{color:"green"}}>Present: {presentCount}</div>
          <div className="card absent" style={{color:"red"}}>Absent: {absentCount}</div>
        </div>

        <StudentForm addStudent={addStudent} />
      
        <Studentlist
          students={students}
          deleteStudent={deleteStudent}
          markStatus={markStatus}
        />

      </div>
    </>
  );
}

export default App;