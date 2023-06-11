/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
import Account from "../Account";
import "./Accounts.css";

function Accounts({ accounts }) {
  return (
    <div>
      {accounts.map((parent) => {
        return (
          <ul key={parent.name} className="list">
            <li>
              <Account account={parent} />

              <div>
                {/*check also expanded*/}
                {parent.accounts && <Accounts accounts={parent.accounts} />}
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
export default Accounts;
