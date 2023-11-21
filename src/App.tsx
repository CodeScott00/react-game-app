import { Button } from "./Components/Button/Button";
import { Like } from "./Components/Like";
import { useState } from "react";
import produce from "immer";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import ExpandableText from "./Components/ExpandableText";
import Form from "./Components/Form";
import ExpenseForm from "./Components/Expense/ExpenseForm";
import ExpenseList from "./Components/Expense/ExpenseList";
import ExpenseFilter from "./Components/Expense/ExpenseFilter";

export const categories = ["Groceries", "Utilities", "Entertainment"];

function App() {
  const [selectedCategory, setSelectedCatgory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      desciption: "yes",
      amount: 1,
      category: "Utilities",
    },
    {
      id: 2,
      desciption: "yes",
      amount: 2,
      category: "Entertainment",
    },
  ]);

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((event) => event.id !== id));
  };

  const handleSelect = (category: string) => {
    setSelectedCatgory(category);
  };

  const visableExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category == selectedCategory)
    : expenses;

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <div className="mb-5">
        <ExpenseForm onSubmit={onSubmit} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={handleSelect} />
      </div>

      <ExpenseList expenses={visableExpenses} onDelete={onDelete} />
      {/* <Form /> */}
      {/* <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum debitis
        incidunt exercitationem earum numquam? Dolore, placeat sapiente
        accusamus quos ab, ipsa quo nisi quas assumenda, dolor repudiandae odit
        consequuntur? Sed rem corporis quasi dolorem voluptatibus dolore, minus
        hic, dolor, facilis labore natus! Magnam consequatur quia sit facilis
        culpa ducimus dolores odit beatae, voluptas laudantium voluptate
        accusamus possimus suscipit voluptatum nesciunt. In aperiam repudiandae
        odit ipsa iure ad dolores dolorum delectus provident, numquam vero
        officiis natus totam architecto veritatis laudantium necessitatibus
        commodi quaerat? Nam corrupti ipsum id, non atque soluta repellat
        repellendus dolor aliquid, quam nesciunt ducimus consequatur, adipisci
        quaerat possimus.
      </ExpandableText> */}
    </>
  );
}

export default App;
