import { useEffect, useState } from "react";
import Task from "./components/Task";
import { addTask, getAllTask, updateTask, deleteTask} from "./utils/HandleApi";


function App() {

  const [tasks, setTask] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [taskId, setTaskId] = useState("")

  useEffect(() => {
    getAllTask(setTask)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setTaskId(_id)
  }

  return (
    <div className="App">

      <div className="container">

        <h1>Task Management</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add Tasks..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={isUpdating ?
              () => updateTask(taskId, text, setTask, setText, setIsUpdating)
              : () => addTask(text, setText, setTask)}>
            {isUpdating ? "Update" : "Add"}
          </div>

        </div>

        <div className="list">

          { tasks && tasks.length>0 ?
          tasks.map((item) => <Task 
          key={item._id} 
          text={item.text}
          updateMode = {() => updateMode(item._id, item.text)}
          deleteTask = {() => deleteTask(item._id, setTask)} />)
        : <Task 
        text="No Task Found Please Add" />
        }

        </div> 
       

      </div>

    </div>
  );
}

export default App;
