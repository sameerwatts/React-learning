import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();
  // useLoaderData can be used in the same level or at the lower(Child) level, we can't use useLoaderData at the higher level

  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ...
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
