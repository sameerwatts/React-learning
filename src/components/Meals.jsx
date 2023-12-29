import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";

const Meals = () => {
  const {data: loadedMeals, isLoading, error} = useHttp("http://localhost:3000/meals")

  if(isLoading) {
    return <p>Loading Meals...</p>
  }
  return (
    <ul id="meals">
      {loadedMeals?.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
