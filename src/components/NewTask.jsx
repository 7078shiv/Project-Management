import { Button } from "@mui/material";
import {forwardRef } from "react"

// eslint-disable-next-line react/prop-types
const NewTask = forwardRef(function NewTask({addTask},ref){
  return (
    <div className='flex items-center gap-4'>
        <input className="mx-20 my-10 w-64 px-3 py-1 rounded-sm bg-stone-400" ref={ref} type="text"></input>
        <Button variant="contained" onClick={addTask}>AddTask</Button>
    </div>
  )
})
export default NewTask;
