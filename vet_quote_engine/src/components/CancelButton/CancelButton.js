import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import CancelModal from "./CancelModal";
import { useContext } from "react";

const CancelButton = () => {
  const {cancelClear} = useContext(AppContext);
  const navigate = useNavigate();
//   let status = false;
//   this handle click is for conditional rendering
//   const handleClick = () => {
//     console.log("changing status from ", status, " to ", !status);
//     status = !status;
//   };
//   const handleYes = () => {
//     navigate("/");
//   };
//   const handleNo = () => {
//     status = !status;
//   };

const handleClick = () => {
    cancelClear();
    navigate('/');
}
  return (
    <div>
      <button className="cancel-button" onClick={() => handleClick()}>
        CANCEL
      </button>
    </div>
  );

  }
export default CancelButton;
