import React, { useState } from "react";
import CustomInput from "./CustomInput";



const AddNewProject = ({handleChange, handleSubmitProject}) => {

  return (
    <div className="w-[35rem] mt-16">
      <form onSubmit={handleSubmitProject} className="mt-4 text-right">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </menu>
        <CustomInput onChange={handleChange} name="title" title='Title' isMultilineInput={false} type="text" />
        <CustomInput onChange={handleChange} name="description" title='Description' isMultilineInput={true} type="text" />
        <CustomInput onChange={handleChange} name="dueDate" title='Due date' isMultilineInput={false} type="date" />
      </form>
    </div>
  );
};

export default AddNewProject;
