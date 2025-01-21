export default function TabButton ({ children, onSelect, selectedTab }){
  return (
    <li>
      <button
        className={
          selectedTab && children.toLowerCase() === selectedTab ? "active" : ""
        }
        onClick={(event) => onSelect(event)}
      >
        {children}
      </button>
    </li>
  );
};
