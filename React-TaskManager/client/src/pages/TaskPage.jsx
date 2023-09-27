import { useAuth } from "../context/AuthContext"

function TaskPage(){
    const {user}= useAuth();
    return(
        <h1>Task Form</h1>
    )
}

export default TaskPage