import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle 
} from "react-icons/io";

export function Rig({ onClickLeft, onClickRight }) {
  return (
    <div className="rig_container">
      <IoIosArrowDropleftCircle
        color={"ivory"}
        size={108}
        onClick={onClickLeft}
      />
      <IoIosArrowDroprightCircle
        color={"ivory"}
        size={108}
        onClick={onClickRight}
      />
    </div>
  );
}

