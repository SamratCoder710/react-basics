import Section from "./Section";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Time to get started!">
      <ul>
        {CORE_CONCEPTS.map((e) => {
          return (
            <li key={e.image}>
              <CoreConcept
                img={e.image}
                title={e.title}
                description={e.description}
              ></CoreConcept>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
