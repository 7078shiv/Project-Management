/* eslint-disable react/prop-types */
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

export default function Task({ tasks,removeTask}){
  return (
    <section>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have Task Yet
        </p>
      )}
      {tasks.length !== 0 && (
        <Paper elevation={3} style={{ margin: "20px", padding: "20px" }}>
          <List>
            {tasks.map((task) => (
              <div key={task.id}>
                <ListItem>{task.taskName}</ListItem>
                <Button
                  variant="outlined"
                  onClick={() => removeTask(task.taskName, task.id)}
                >
                  Remove Task
                </Button>
              </div>
            ))}
          </List>
        </Paper>
      )}
    </section>
  );
}
