
function Student(prop){
    return(
        <div className="students-container">
            <h1>Hello all Student name : {prop.name}</h1>
            <h2>Student Class : {prop.class}</h2>
        </div>
    )
}

export default Student;