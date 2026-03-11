import StudentCard from "./StudentCard";

function StudentList({ students, deleteStudent, markStatus }) {

  return (
    <>
      <div className="list" style={{marginTop:"20px",display:"grid",gap:"15px"}}>

        {students.length === 0 && (
          <p className="empty" style={{textAlign:"center",color:"gray"}}>No Students Found</p>
        )}

        <StudentCard
        students={students}
        deleteStudent={deleteStudent}
        markStatus={markStatus}
      />

      </div>
    </>
  );
}

export default StudentList;