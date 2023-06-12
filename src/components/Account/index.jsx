import "./Account.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Account({ account: { id, name, hasChildren } }) {
  return (
    <div className="account">
      <h3>{name}</h3>
      {hasChildren && (
        <ArrowDropDownIcon
          className="arrow"
          onClick={() => alert(`get chidren from ${id}`)}
        />
      )}
    </div>
  );
}
export default Account;
