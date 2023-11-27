import {useState} from 'react'
import './App.css'
import ProjectSidebar from './components/ProjectSidebar'
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectDetails from './components/ProjectDetails';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App(){

  const[projectState,setProjectState]=useState({
    selectedProjectId:undefined,
    projects:[]
  });

  const[projectData,setProjectData]=useState({});



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

  function handelDeleteProject(projectData){
    setProjectState((prevState)=>{
      const modifyProjects=prevState.projects.filter((o)=>o!==projectData);
      return {
        ...prevState,
        projects:modifyProjects,
        selectedProjectId:undefined
      }
    })
  }

  if(projectState.selectedProjectId===null){
    content=<NewProject onAdd={handelAddProject} deleteProject={handelDeleteProject}/>
  }
  else if(projectState.selectedProjectId===undefined){
    content=<NoProjectSelected onStartAddProject={handelStartAddProject}/>
  }
  else{
    content=<ProjectDetails projectData={projectData} deleteProject={handelDeleteProject}/>
  }

  function projectDetailsHandler(projectData){
    setProjectData(projectData);
    setProjectState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:2
      }
    })
  }

  console.log(projectState);

  return (
    <main className='h-screen my-8 flex gap-8'>
    <ProjectSidebar  projects={projectState.projects} onStartAddProject={handelStartAddProject} onClickProject={projectDetailsHandler}/>
    {content}
    </main>
  )
}
export default App;
