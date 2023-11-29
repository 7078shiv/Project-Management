/* eslint-disable react/prop-types */
import noProjectImage from "../assets/no-projects.png";
import Button from "./ButtonUsage";
import { NewContext } from "../store/Context";
export default function NoProjectSelected() {
  return (
    <NewContext.Consumer>
      {({onStartAddProject})=>{
        return(
        <div className="mt-24 text-center w-2/3">
        <img
          src={noProjectImage}
          alt="An empty task list"
          className="w-16 h-16 object-contain mx-auto"
        />
        <h2 className="text-xl font-bold text-stone-500 my-4">
          No Project selected
        </h2>
        <p className="text-stone-400 mb-4">
          Select a project and get started with new One.
        </p>
        <Button name="Create new Project" onClick={onStartAddProject} />
      </div>
        )
      }}
    </NewContext.Consumer>
  );
}
