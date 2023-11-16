import { useState } from "react";
import NoProjectContent from "./component/NoProjectContent";
import Sidebar from "./component/Sidebar";
import AddNewProject from "./component/AddNewProject";

function App() {

  const [isAddProjectSelected, setIsAddProjectSelected] = useState(false);

  const addProject = () => {
    setIsAddProjectSelected(true)
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handleAddProject={addProject}/>
      {isAddProjectSelected ? <AddNewProject />: <NoProjectContent handleAddProject={addProject} />}
    </main>
  );
}

export default App;
