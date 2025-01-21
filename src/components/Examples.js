import Section from "./Section";
import TabButton from "../TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [tabContent, setTabContent] = useState(null);

  const handleSelect = (event) => {
    const btnValue = event.target.textContent.toLowerCase();
    setTabContent(btnValue);
    console.log(tabContent);
  };
  return (
    <Section id="examples" title="Examples">
      <menu>
        <TabButton onSelect={handleSelect} selectedTab={tabContent}>
          Components
        </TabButton>
        <TabButton onSelect={handleSelect} selectedTab={tabContent}>
          JSX
        </TabButton>
        <TabButton onSelect={handleSelect} selectedTab={tabContent}>
          Props
        </TabButton>
        <TabButton onSelect={handleSelect} selectedTab={tabContent}>
          State
        </TabButton>
      </menu>
      {tabContent && (
        <div id="tab-content">
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>{EXAMPLES[tabContent].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
