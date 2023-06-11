/* eslint-disable react/prop-types */
import Account from "../Account";

// eslint-disable-next-line react/prop-types
function AccountsChart({ accounts }) {
  return (
    <>
      <h2>Accounts Chart</h2>

      {accounts.map((account) => (
        <Account key={account.id} account={account} />
      ))}
    </>
  );
}
export default AccountsChart;
