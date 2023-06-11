/* eslint-disable react/prop-types */
//function Account({ id, name, has_children }) {
import "./Account.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Account({ account: { id, name, has_children } }) {
  return (
    <div className="account">
      <h3>{name}</h3>
      {has_children && (
        <ArrowDropDownIcon
          className="arrow"
          onClick={() => alert(`get chidren from ${id}`)}
        />
      )}
    </div>
  );
}
export default Account;
