import { useContext } from "react";
import "./App.css";
import Accounts from "./components/Accounts";
import { StoreContext } from "./context/store";

function App() {
  const accounts = useContext(StoreContext);
  return (
    <>
      <h1>Nominal Challenge</h1>
      <div className="main">
        <Accounts accounts={accounts} />
      </div>
    </>
  );
}

export default App;
