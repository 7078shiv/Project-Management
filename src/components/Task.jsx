import NewTask from "./NewTask";
import { useRef, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
export default function Task() {
  const taskRef = useRef();
  const [task, setTask] = useState([]);
  function handelSetTask() {
    setTask((prevTasks) => {
       
      const arr = [];
      if (prevTasks.length === 0) {
        arr.push(taskRef.current.value);
        taskRef.current.value="";
        return arr;
      }
      const newtasksArray = [...prevTasks];
      newtasksArray.push(taskRef.current.value);
      taskRef.current.value="";
      return newtasksArray;
    });
  }

  function removeTask(currTask){
    setTask((prevTasks)=>{
        return prevTasks.filter((task)=>task!==currTask);
    })
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask ref={taskRef} addTask={handelSetTask} />
      {task.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have Task Yet
        </p>
      )}
      {task.length !== 0 && (
        <Paper elevation={3} style={{ margin: "20px", padding: "20px" }}>
          <List>
            {task.map((task, index) => (
               <>
              <ListItem key={index}>{task}</ListItem>
              <Button varient="outlined" onClick={()=>removeTask(task)}>Romove Task</Button>
              </>
            ))}
          </List>
        </Paper>
      )}
    </section>
  );
}
