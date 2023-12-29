/* eslint-disable react/prop-types */
import Button from "./ButtonUsage";
import { NewContext } from "../store/Context";
export default function ProjectSidebar()
{
  return (
    <>
    <NewContext.Consumer>
      {({projects,onClickProject,onStartAddProject})=>{
        return(
         <aside className="w-1/3  bg-stone-900 text-white px-8 py-16 md:w-72 rounded-r-xl">
         <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
           Your Projects
         </h2>
         <div>
           <Button onClick={onStartAddProject} name="+ Add Project" />
         </div>
         {
           projects.length===0 &&
           <p>Currently No Project is there</p>
         }
         {
           projects.length>0 &&
         <ul className="mt-8">
           {projects.map((value, index) =>(
             <li key={index}>
               <button
                 onClick={() => onClickProject(value)}
                 className="w-full text-left px-3 py-3 text-stone-400 rounded-sm my-4 hover:bg-stone-800 hover:text-stone-100"
               >
                 {value.projectTitle}
               </button>
             </li>
           ))}
         </ul>
         }
       </aside>
        )
      }}
      </NewContext.Consumer>
    </>
  );
}
