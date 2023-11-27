import { createContext } from "react";

export const NewContext=createContext(
    {
        selectedProjectId:undefined,
        projects:[]
    }
);

export const ProjectDataContext=createContext(
    {}
);





