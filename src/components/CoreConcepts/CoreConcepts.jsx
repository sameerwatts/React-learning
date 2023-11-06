import React from "react";
import { CORE_CONCEPTS } from "../../data-with-examples";
import CoreConcept from "./CoreConcept";
import Section from "../Section";

const CoreConcepts = () => {
  return (
    <Section title="Time to get started!" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          <CoreConcept key={index} {...concept} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
