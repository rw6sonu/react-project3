import { useState } from "react";

function StudentCard({ students, deleteStudent, markStatus }) {

  const [show, setShow] = useState(false);

  const toggleDetails = () => {
    setShow(prev => !prev);
  };

  return (
    <div style={{
      background:"lightgray",
      color:"black",
      padding:"15px",
      borderRadius:"10px",
      boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
    }}>

      <h2>Student Details</h2>

      <button
        onClick={toggleDetails}
        style={{
          marginTop:"10px",
          background:"#444",
          color:"white",
          border:"none",
          padding:"6px 10px",
          borderRadius:"6px"
        }}
      >
        {show ? "Hide Details" : "Show Details"}
      </button>

      {show && (

        <div style={{marginTop:"15px"}}>

          {students.map((student) => (

            <div key={student.id} style={{
              border:"1px solid #aaa",
              padding:"10px",
              marginTop:"10px",
              borderRadius:"6px"
            }}>

              <h3>{student.name}</h3>
              <p>Status: {student.status}</p>
              <p>ID: {student.id}</p>

              <button
                style={{marginRight:"20px"}}
                onClick={() => markStatus(student.id,"Present")}
              >
                Present
              </button>

              <button
                style={{marginRight:"20px"}}
                onClick={() => markStatus(student.id,"Absent")}
              >
                Absent
              </button>

              <button
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default StudentCard;