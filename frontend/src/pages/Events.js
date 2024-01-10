import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();
  // useLoaderData can be used in the same level or at the lower(Child) level, we can't use useLoaderData at the higher level

  return <EventsList events={events} />;
}

export default EventsPage;
