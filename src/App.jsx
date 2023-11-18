import { useState } from "react";
import NoProjectContent from "./component/NoProjectContent";
import AddNewProject from "./component/AddNewProject";
import ProjectDetails from "./component/ProjectDetails";
import ProjectsSidebar from "./component/ProjectsSidebar";

const initialProjectContent = {
  title: "",
  description: "",
  dueDate: "",
  tasks: [],
};

function App() {
  const [isAddProjectSelected, setIsAddProjectSelected] = useState(false);
  const [isProjectDetailVisible, setIsProjectDetailVisible] = useState(false);
  const [formData, setFormData] = useState(initialProjectContent);
  const [projectsList, setProjectsList] = useState([]);
  const [projectDetail, setProjectDetail] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitProject = (e) => {
    e.preventDefault();
    const newFormData = {
      id: Math.random(),
      title: formData.title,
      description: formData.description,
      dueDate: formData.dueDate,
      tasks: [],
    };
    setProjectsList((prevListState) => {
      return [...prevListState, newFormData];
    });
    setFormData(initialProjectContent);
  };

  const addProject = () => {
    setIsAddProjectSelected(true);
    setIsProjectDetailVisible(false);
  };

  const cancelFormHandler = () => {
    setFormData(initialProjectContent);
    setIsProjectDetailVisible(false);
    setIsAddProjectSelected(false);
  };

  const removeProjectHandler = (id) => {
    const indexOfRemovedProject = projectsList.findIndex(
      (project) => project.id === id
    );
    const newProjectsList = [
      ...projectsList.slice(0, indexOfRemovedProject),
      ...projectsList.slice(indexOfRemovedProject + 1),
    ];
    setProjectsList(newProjectsList);
    setIsProjectDetailVisible(false);
    setIsAddProjectSelected(false);
  };

  const getProjectDetail = (id) => {
    const detail = projectsList.find((project) => project.id === id);
    setProjectDetail(detail);
    setIsProjectDetailVisible(true);
  };

  const addTask = (id, task) => {
    const updatedProjectList = projectsList?.map((project) => {
      let newTasks = [...project.tasks];
      if (id === project.id) {
        newTasks = [...newTasks, task];
      }
      return {
        ...project,
        tasks: newTasks,
      };
    });
    setProjectsList(updatedProjectList);
  };

  let renderedContent = <NoProjectContent handleAddProject={addProject} />;

  if (isAddProjectSelected) {
    renderedContent = (
      <AddNewProject
        handleChange={handleChange}
        handleSubmitProject={handleSubmitProject}
        formData={formData}
        cancelFormHandler={cancelFormHandler}
      />
    );
  }

  if (isProjectDetailVisible) {
    renderedContent = (
      <ProjectDetails
        projectData={projectDetail}
        setProjectsList={setProjectsList}
        removeProjectHandler={removeProjectHandler}
        projectsList={projectsList}
        addTask={addTask}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        handleAddProject={addProject}
        projects={projectsList}
        handleProjectDetail={getProjectDetail}
      />
      {renderedContent}
    </main>
  );
}

export default App;
