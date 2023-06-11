import axios from 'axios'

const baseUrl = "http://localhost:8080"


//Get All Tasks

const getAllTask = (setTask) => {
    axios
        .get(`${baseUrl}/tasks`)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setTask(data)
        })
}


//Add Task

const addTask = (text, setText, setTask) => {

    axios
        .post(`${baseUrl}/tasks`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllTask(setTask)
        })
        .catch((err) => console.log(err))

}

// Update Task

const updateTask = (taskId, text, setTask, setText, setIsUpdating) => {

    axios
        .put(`${baseUrl}/tasks/:id`, { _id: taskId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllTask(setTask)
        })
        .catch((err) => console.log(err))

}


// Delete Task


const deleteTask = (_id, setTask) => {

    axios
        .delete(`${baseUrl}/tasks/:id`, { _id })
        .then((data) => {
            console.log(data)
            getAllTask(setTask)
        })
        .catch((err) => console.log(err))

}


// Get Single Task

const SingleTask = (_id, setTask) => {

    axios
        .delete(`${baseUrl}/tasks/:id`, { _id })
        .then((data) => {
            console.log(data)
            getAllTask(setTask)
        })
        .catch((err) => console.log(err))

}

export { getAllTask, addTask, updateTask, deleteTask }