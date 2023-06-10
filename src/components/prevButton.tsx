import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function PrevButton() {
  const navigate = useNavigate();
  return (
    <button
      className="d-flex gap-2 p-2 prevbtn align-items-center"
      onClick={() => {
        navigate("/");
      }}>
      <BsArrowLeft size={16} />
      Back to Homepage
    </button>
  );
}
