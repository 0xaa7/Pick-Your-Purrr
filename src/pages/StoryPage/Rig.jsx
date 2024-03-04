import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill
} from "react-icons/bs";

export function Rig({ onClickLeft, onClickRight }) {
  return (
    <div className="rig_container">
      <BsFillArrowLeftSquareFill
        color={"ivory"}
        size={48}
        onClick={onClickLeft}
      />
      <BsFillArrowRightSquareFill
        color={"ivory"}
        size={48}
        onClick={onClickRight}
      />
    </div>
  );
}
