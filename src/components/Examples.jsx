import React, { useState } from "react";
import { EXAMPLES } from "../data-with-examples";
import TabButtons from "./TabButtons";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [selectedTopics, setSelectedTopics] = useState(null);

  const handleTabSelect = (SelectedButton) => {
    setSelectedTopics(SelectedButton);
  };

  let tabContnet = <p>Please select a topic</p>;

  if (selectedTopics) {
    tabContnet = (
      <div className="tab-content">
        <h3>{EXAMPLES[selectedTopics].title}</h3>
        <p>{EXAMPLES[selectedTopics].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopics].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButtons
              isSelected={selectedTopics === "components"}
              onClick={() => handleTabSelect("components")}
            >
              Components
            </TabButtons>
            <TabButtons
              isSelected={selectedTopics === "jsx"}
              onClick={() => handleTabSelect("jsx")}
            >
              JSX
            </TabButtons>
            <TabButtons
              isSelected={selectedTopics === "props"}
              onClick={() => handleTabSelect("props")}
            >
              Props
            </TabButtons>
            <TabButtons
              isSelected={selectedTopics === "state"}
              onClick={() => handleTabSelect("state")}
            >
              State
            </TabButtons>
          </>
        }
      >
        {tabContnet}
      </Tabs>
    </Section>
  );
};

export default Examples;
