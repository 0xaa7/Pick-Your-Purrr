import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle 
} from "react-icons/io";

export function Rig({ onClickLeft, onClickRight }) {
  return (
    <div className="rig_container">
      <IoIosArrowDropleftCircle
        color={"#4b1794"}
        size={78}
        onClick={onClickLeft}
      />
      <IoIosArrowDroprightCircle
        color={"#4b1794"}
        size={78}
        onClick={onClickRight}
      />
    </div>
  );
}

