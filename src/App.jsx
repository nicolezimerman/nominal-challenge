import "./App.css";
import AccountsChart from "./components/AccountsChart";
import accounts from "./mock-data/get";

function App() {
  return (
    <>
      <h1>Nominal Challenge</h1>
      <div className="main">
        <AccountsChart accounts={accounts} />
      </div>
    </>
  );
}

export default App;
