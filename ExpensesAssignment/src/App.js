import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Mazda",
      amount: 3000,
      image: "Mazda_Logo",
      store: "Avis",
    },
    {
      id: 2,
      title: "Ford",
      amount: 2000,
      image: "Ford_Logo",
      store: "Hertz",
    },
    {
      id: 3,
      title: "Nissan",
      amount: 1000,
      image: "Nissan_Logo",
      store: "Avis",
    },
    {
      id: 4,
      title: "Honda",
      amount: 500,
      image: "Honda_Logo",
      store: "Sixth",
    },
    {
      id: 5,
      title: "BMW",
      amount: 4000,
      date: new Date(2023, 5, 28),
      image: "BMW_Logo",
      store: "Hertz",
    },
  ];

  return (
    <div>
      <h2> Those are my cars: </h2>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
}

export default App;
