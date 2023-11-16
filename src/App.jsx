import { useState } from "react";
import NoProjectContent from "./component/NoProjectContent";
import Sidebar from "./component/Sidebar";
import AddNewProject from "./component/AddNewProject";
import ProjectDetails from "./component/ProjectDetails";

const initialProjectContent = {
  title: "",
  description: "",
  dueDate: "",
};

function App() {
  const [isAddProjectSelected, setIsAddProjectSelected] = useState(false);
  const [isProjectDetailVisible, setIsProjectDetailVisible] = useState(false);
  const [formData, setFormData] = useState(initialProjectContent);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitProject = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const addProject = () => {
    setIsAddProjectSelected(true);
    setIsProjectDetailVisible(false);
  };
  let renderedContent = <NoProjectContent handleAddProject={addProject} />;

  if (isAddProjectSelected) {
    renderedContent = (
      <AddNewProject
        handleChange={handleChange}
        handleSubmitProject={handleSubmitProject}
      />
    );
  }

  if (isProjectDetailVisible) {
    renderedContent = <ProjectDetails formData={formData} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handleAddProject={addProject} formData={formData} />
      {renderedContent}
    </main>
  );
}

export default App;
