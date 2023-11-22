import { useNavigate } from "react-router-dom";

const CancelModal = ({children, status}) => {
    const navigate = useNavigate();
    const handleYes = () => {
        navigate('/');
    }
    const handleNo = () => {
        status = !status;
    }
  return (
    <div className="modal-background">
      <div className="modal">
        <h1>Are you sure?</h1>
        <button onClick={() => handleYes()}>Yes</button>
        <button onClick={() => handleNo()}>No</button>
      </div>
    </div>
  );
};

export default CancelModal;
