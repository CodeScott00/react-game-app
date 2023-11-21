import React from "react";
import { categories } from "../../App";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = (props: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => props.onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} id="category">
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
