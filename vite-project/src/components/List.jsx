import React from "react";

const List = ({ items }) => {
    return (
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
};

export default List;