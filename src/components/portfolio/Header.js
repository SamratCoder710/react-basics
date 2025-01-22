import reactImg from "../../assets/react-core-concepts.png";
import stateMngImg from "../../assets/state-mgmt.png";
//CSS module
import styles from "../../styles.module.css";

export default function () {
  const arr = ["a", "b", "c", "d"];
  const a = arr.splice(1, 2, "k", "j");
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];
  let max = 3;
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1 id={styles.sanam}>React Essentials</h1>
      <p>
        {reactDescriptions[Math.floor(Math.random() * (max + 1))]} Fundamental
        React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
