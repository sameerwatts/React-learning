import useHttp from "../hooks/useHttp";
import Error from "./Error";
import MealItem from "./MealItem";

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals");

  if (isLoading) {
    return <p className="center">Loading Meals...</p>;
  }

  if (error) {
    return <Error className='center' title={"Failed to fetch meals"} message={error} />;
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
