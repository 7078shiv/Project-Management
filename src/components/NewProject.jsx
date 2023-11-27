import React from "react";
import ButtonUsage from "./ButtonUsage";
import EmptySaveModal from "./EmptySaveModal";
import Input from "./Input";
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useRef } from "react";
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
// eslint-disable-next-line react/prop-types
export default function NewProject({ onAdd,deleteProject }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const dialog = useRef();
  const [value, setValue] = React.useState(2);

  function handelSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;
    if (
      enteredTitle === "" ||
      enteredDescription === "" ||
      enteredDate === ""
    ) {
      dialog.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }

  return (
    <>
      <EmptySaveModal ref={dialog} buttonName="Ok">
      <DialogTitle id="alert-dialog-title">
          {"Enter valid credentials"}
      </DialogTitle>
      <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Oops! Looks like you didn&apos;t enter values.
          </DialogContentText>
        </DialogContent>
      </EmptySaveModal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
          <Button onClick={()=>deleteProject()} variant="outlined" startIcon={<DeleteIcon/>} >
           Delete
          </Button>
          </li>
          <li>
            <ButtonUsage onClick={handelSave} name="Save" />
          </li>
        </menu>
        <div>
          <Input ref={title} label="TITLE" />
          <Input ref={description} label="DESCRIPTION" textarea={true} />
          <Input ref={date} label="DATE" type="date" />
        </div>
      <Typography component="legend">Give Rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </div>
    </>
  );
}
