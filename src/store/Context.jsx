import { createContext } from "react";

export const NewContext=createContext(
    {
        selectedProjectId:undefined,
        projects:[],
        onStartAddProject:()=>{},
        onClickProject:()=>{}
    }
);

export const ProjectDataContext=createContext(
    {
    projectDataObject:{},
    deleteProject:()=>{},
    addProject:()=>{}
    }
);





