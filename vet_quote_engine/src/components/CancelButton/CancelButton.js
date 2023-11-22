import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import CancelModal from "./CancelModal";

const CancelButton = () => {
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
    navigate('/');
}
  return (
    <div>
      <button className="cancel-button" onClick={() => handleClick()}>
        CANCEL
      </button>
    </div>
  );

  //   useEffect(() => {
  //     if (!status) {
  //         return (
  //           <button className="cancel-button" onClick={() => handleClick()}>
  //             CANCEL
  //           </button>
  //         );
  //       } else
  //         return (
  //           <div>
  //             <h1>Are you sure?</h1>
  //             <button onClick={() => handleYes()}>Yes</button>
  //             <button onClick={() => handleNo()}>No</button>
  //           </div>
  //         );
  //   })
};
export default CancelButton;
