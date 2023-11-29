/* eslint-disable react/prop-types */
//import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Task from './Task';
import { ProjectDataContext } from '../store/Context';

export default function ProjectDetails(){
  
  return (
    <ProjectDataContext.Consumer>
      {({deleteProject,projectDataObject})=>{
        return(
          <div className='text-center'>
          <Card sx={{ minWidth: 575 }}>
            <CardContent>
            <Typography variant="h5" component="div">
                Project Title
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {projectDataObject.title}
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
      
              <Typography variant="body2">
                {projectDataObject.date}
              </Typography>
            </CardContent>
          
            <Task/>
            
            <CardActions>
               <Button variant="outlined" startIcon={<DeleteIcon/>} onClick={()=>deleteProject(projectDataObject)}>
                 DeleteProject
               </Button>
            </CardActions>
          </Card>
          </div>
        )
      }}
    </ProjectDataContext.Consumer>
  );
}