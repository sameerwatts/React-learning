import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useFetchData from "../../hooks/useFetchData";

const baseUrl =
  "https://react-http-b4555-default-rtdb.firebaseio.com/tasks.json";
  
  const NewTask = (props) => {
    
    
  const {
    isLoading,
    error,
    sendRequest: sendTaskRequest,
  } = useFetchData();
  
  const enterTaskHandler = async (taskText) => {
    const createTasks = (taskData) => {
      console.log('taskData',taskData);
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
    }
    sendTaskRequest({
      url: baseUrl,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { text: taskText },
    }, createTasks);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
