import React, { useState } from "react";
import Tasks from "./Tasks";

const ProjectDetails = ({
  projectData,
  removeProjectHandler,
  projectsList,
  addTask,
}) => {
  console.log('projectsList',projectsList);
  const inputDate = new Date(projectData.dueDate);
  const [task, setTask] = useState("");

  const formattedDate = inputDate.toLocaleDateString("en-US", {
    month: "short", // or 'long' for full month name
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">
          {projectData.title}
        </h1>
        <button
          onClick={() => removeProjectHandler(projectData.id)}
          className="text-stone-600 hover:text-stone-950"
        >
          Delete
        </button>
      </div>
      <p className="text-stone-600 whitespace-pre-wrap">{formattedDate}</p>

      <p className="text-stone-800 my-4">{projectData.description}</p>
      <header className="pb-4 mb-4 border-b-2 border-stone-300"></header>
      <Tasks
        addTask={addTask}
        task={task}
        setTask={setTask}
        projectData={projectData}
      />
    </div>
  );
};

export default ProjectDetails;
