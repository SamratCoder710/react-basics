import "./card.css";

export default function Card({ name, children }){
  return (
    <div className="card">
      <h2>{name}</h2>
      {children}
    </div>
  );
};
