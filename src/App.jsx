import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButtons from "./components/TabButtons";
import { useState } from "react";
import { EXAMPLES } from "./data-with-examples";

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcepts key={index} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons
              isSelected={selectedTopics === "components"}
              onSelect={() => handleTabSelect("components")}
            >
              Components
            </TabButtons>
            <TabButtons
              isSelected={selectedTopics === "jsx"}
              onSelect={() => handleTabSelect("jsx")}
            >
              JSX
            </TabButtons>
            <TabButtons
              isSelected={selectedTopics === "props"}
              onSelect={() => handleTabSelect("props")}
            >
              Props
            </TabButtons>
            <TabButtons
              isSelected={selectedTopics === "state"}
              onSelect={() => handleTabSelect("state")}
            >
              State
            </TabButtons>
          </menu>
          {tabContnet}
        </section>
      </main>
    </div>
  );
}

export default App;
