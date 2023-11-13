import { useState } from "react";
//import ".ListGroup.css";
import styled from "./ListGroup.css";

// const List = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// interface ListItemProps {
//   active: boolean;
// }

// const ListItem = styled.li<ListItemProps>`
//   padding: 5px: 0;
//   background: ${(props) => (props.active ? "blue" : "none")}
// `;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // this lets the App know that something is selected
}
// this is the props destructed
function ListGroup({ items, heading, onSelectItem }: Props) {
  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group" style={{ backgroundColor: "Yellow" }}>
        {items.map((item, index) => (
          <li
            //active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
