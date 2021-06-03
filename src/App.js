import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {title: 'Car Insurence', amount: 294.54, date: new Date(2021, 2, 28)}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
