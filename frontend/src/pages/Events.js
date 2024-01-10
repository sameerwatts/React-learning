import React from "react";
import { Link } from "react-router-dom";

const EVENTS = [
  { id: "e1", title: "Event 1", description: "This is first event" },
  { id: "e2", title: "Event 2", description: "This is second event" },
  { id: "e3", title: "Event 3", description: "This is third event" },
];
const Events = () => {
  return (
    <>
      <h1>Events Page</h1>
      {EVENTS?.map((event) => {
        return (
          <Link key={event.id} to={`${event.id}`}>
            {event.title}
          </Link>
        );
      })}
    </>
  );
};

export default Events;
