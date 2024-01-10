import React from "react";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const params = useParams();
  console.log("params", params);
  return (
    <>
      <h1>Event Detail Page</h1>
      {params.eventId}
    </>
  );
};

export default EventDetail;
