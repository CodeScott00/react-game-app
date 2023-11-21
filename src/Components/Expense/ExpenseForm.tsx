import React from "react";
import { categories } from "../../App";

interface Props {
  onSubmit: (event: SubmitEvent) => void;
}

const ExpenseForm = (props: Props) => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <input className="form-control" id="description" type="text" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input className="form-control" id="amount" type="number" />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Categories
          </label>
          <select className="form-control" id="category">
            <option></option>
            {categories.map((category) => (
              <option id="category" key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button onSubmit={props.onSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
