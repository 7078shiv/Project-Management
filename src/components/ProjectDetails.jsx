/* eslint-disable react/prop-types */
// import * as React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Task from "./Task";
import { useContext, useRef, useState } from "react";
import { ProjectDataContext } from "../store/Context";
import NewTask from "./NewTask";
import axios from "axios";

export default function ProjectDetails({ projectData }) {
  console.log(projectData.projectDataObject.tasks);
  const taskRef = useRef();
  const [task, setTask] = useState([...projectData.projectDataObject.tasks]);
  const { deleteProject, projectDataObject } = useContext(ProjectDataContext);

  async function handelSetTask() {
    const newTaskName = taskRef.current.value.trim();
    if (newTaskName) {
      try {
        console.log(newTaskName);
        // Send a POST request to add a new task
        const response = await axios.post(
          "http://localhost:4000/api/v1/taskData/add-task-by-project-id",
          {
            projectId: projectDataObject.id,
            taskName: newTaskName,
          }
        );
        console.log(response.data.data["tasks"]);
        // Update the local state with the new task
        setTask(() => [...response.data.data["tasks"]]);
        taskRef.current.value = "";
      } catch (error) {
        console.error("Error adding task:", error);
      }
    } else {
      setTask((prevTasks) => [...prevTasks]);
    }
  }

  // Function to removeTask
  const removeTask = async (currTask, taskId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/v1/taskData/delete-task-by-id/${taskId}`
      );
      const responseData = response.data.data; // Assuming the projects are in the 'data' property of the response
      if (responseData > 0) {
        console.log("task deleted successfully");
      }
      setTask((prevTasks) => {
        return prevTasks.filter((task) => task.taskName !== currTask);
      });
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // task work end

  return (
    <div className="text-center">
      <Card sx={{ minWidth: 575 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Project Title
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {projectDataObject.projectTitle}
          </Typography>

          <Typography variant="h5" component="div">
            Project ID
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {projectDataObject.id}
          </Typography>

          <Typography variant="h5" component="div">
            Project Description
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {projectDataObject.description}
          </Typography>

          <Typography variant="h5" component="div">
            Project Date
          </Typography>

          <Typography variant="body2">{projectDataObject.date}</Typography>
        </CardContent>
        {/* {setTask((prevTasks) => [...prevTasks])} */}

        <NewTask ref={taskRef} addTask={handelSetTask} />
        <Task tasks={task} removeTask={removeTask} />

        <CardActions>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => deleteProject(projectDataObject)}
          >
            DeleteProject
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
