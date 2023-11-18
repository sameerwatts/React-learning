import React from "react";

const ProjectsSidebar = ({
  handleAddProject,
  projects,
  handleProjectDetail,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          onClick={handleAddProject}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          + Add Project
        </button>
      </div>
      <p className="flex flex-col gap-3 my-4">
        {projects?.map((project) => {
          return (
            <button
              key={project.id}
              onClick={() => handleProjectDetail(project.id)}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              {project.title}
            </button>
          );
        })}
      </p>
    </aside>
  );
};

export default ProjectsSidebar;
