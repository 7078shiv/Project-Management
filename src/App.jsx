import {useState,useEffect} from 'react'
import './App.css'
import ProjectSidebar from './components/ProjectSidebar'
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectDetails from './components/ProjectDetails';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { NewContext } from './store/Context';
import { ProjectDataContext } from './store/Context';
import axios from "axios";

function App(){
 
  const[projectState,setProjectState]=useState({
    selectedProjectId:undefined,
    projects:[]
  });

  const[projectData,setProjectData]=useState({
    projectDataObject:{}
  });

  useEffect(() => {
    // Function to fetch project data
    const fetchProjectData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/projectData/get-all-project-details');
        const projects = response.data.data; // Assuming the projects are in the 'data' property of the response
        const updatedProjects = projects.filter((item) => typeof item === 'object');
        console.log(updatedProjects);
        setProjectState((prevState) => ({
          ...prevState,
          projects: updatedProjects,
        }));
       
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    // Call the fetchProjectData function when the component mounts
    fetchProjectData();
  }, []); // The empty dependency array ensures this effect runs once when the component mounts


 
  
  let content;
  function handelStartAddProject(){
    setProjectState((prevProject)=>{
      return(
        {
          ...prevProject,
          selectedProjectId:null,
        }
      )
    })
  }

  function handelAddProject(projectData){
  
    setProjectState((prevState)=>{
      const newProject={
        ...projectData
      }
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject]
      }
    })
  }

  async function handelDeleteProject(projectData){
    try{
     const response = axios.delete(`http://localhost:4000/api/v1/projectData/delete-project-by-id/${projectData.id}`)
     console.log(response);
    setProjectState((prevState)=>{
      const modifyProjects=prevState.projects.filter((o)=>o.id!==projectData.id);
      return {
        ...prevState,
        projects:modifyProjects,
        selectedProjectId:undefined
      }
    })
  }
  catch(error){
    console.log("error while deleting project"+error);
  }
  }

  

   function projectDetailsHandler(projectData){

    //console.log(projectData);
    setProjectData(
      ()=>{
        return(
          {
            projectDataObject:{...projectData}
          }
        )
      }
    );
    setProjectState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:2
      }
    })
  }




  const NewCtxValue={
    selectedProjectId:projectState.selectedProjectId,
    projects:projectState.projects,
    onStartAddProject:handelStartAddProject,
    onClickProject:projectDetailsHandler
  }

  const ProjectDataCtxValue={
    projectDataObject:projectData.projectDataObject,
    deleteProject:handelDeleteProject,
    addProject:handelAddProject,
  }

  if(projectState.selectedProjectId===null){
    content=
    <ProjectDataContext.Provider value={ProjectDataCtxValue}>
    <NewProject />
    </ProjectDataContext.Provider>
  }
  else if(projectState.selectedProjectId===undefined){
    content=<NoProjectSelected/>
  }
  else{
    content=
    <ProjectDataContext.Provider value={ProjectDataCtxValue}>
    
    <ProjectDetails projectData={projectData}/>
   
    </ProjectDataContext.Provider>
  }


  return (
    <NewContext.Provider value={NewCtxValue}>
    <main className='h-screen my-8 flex gap-8'>
    <ProjectSidebar/>
    {content}
    </main>
    </NewContext.Provider>
  )
}
export default App;
