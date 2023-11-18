import React from "react";

const Tasks = ({ addTask, task, setTask, projectData }) => {
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-stone-600 mb-2">Tasks</h1>
      <div className="flex items-center gap-4">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={() => addTask(projectData.id, task)}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>

      {/* {tasks && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks?.map((t) => {
            return <li className="flex justify-between my-4">{t}</li>;
          })}
        </ul>
      )} */}
    </div>
  );
};

export default Tasks;
