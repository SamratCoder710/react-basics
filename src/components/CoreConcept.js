export default function CoreConcept(props) {
  return (
    <>
      <img src={props.img}></img>
      <h1>{props.title} </h1>
      <p>{props.description}</p>
    </>
  );
}
