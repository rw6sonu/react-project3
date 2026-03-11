import { useRef, useState, useEffect } from "react";

function StudentForm({ addStudent }) {

  const inputRef = useRef();
  const [error, setError] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = inputRef.current.value.trim();

    if (!name) {
      setError("Student name is required!");
      inputRef.current.focus();
      return;
    }

    addStudent(name);
    inputRef.current.value = "";
    setError("");
    inputRef.current.focus();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit} style={{display:"flex",gap:"10px",justifyContent:"center",marginBottom:"10px"}}>

        <input
          ref={inputRef}
          type="text"
          placeholder="Enter student name"
          style={{padding:"10px",width:"250px",borderRadius:"6px",border:"1px solid #ccc"}}
        />

        <button type="submit" style={{padding:"10px 15px", background:"#007bff",border:"none",color:"white",borderRadius:"6px",cursor:"pointer"}}>Add Student</button>

      </form>

      {error && <p className="error" style={{color:"red",textAlign:"center"}}>{error}</p>}
    </>
  );
}

export default StudentForm;