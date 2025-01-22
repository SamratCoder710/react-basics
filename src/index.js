import ReactDOM from "react-dom/client";


// import below components will import the css file imported in them 
// so comment when not working on these
// import CardHero from "./components/card/CardHero";
// import UserLogin from "./components/userLogin/UserLogin";
import ButtonHero from "./components/button/ButtonHero";

// import App from "./App";



const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<ButtonHero/>);
