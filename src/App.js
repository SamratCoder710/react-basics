// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)
import Header from "./components/portfolio/Header";
import CoreConcepts from "./components/portfolio/CoreConcepts";
import Examples from "./components/portfolio/Examples";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
