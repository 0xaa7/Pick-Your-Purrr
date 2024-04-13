import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle 
} from "react-icons/io";

export function Rig({ onClickLeft, onClickRight }) {
  return (
    <div className="rig">
      
    <div className="rig_containerleft">
      <IoIosArrowDropleftCircle
        color={"#4b1794"}
        size={68}
        onClick={onClickLeft}
      />
    </div>
    <div className="rig_containerright">

      <IoIosArrowDroprightCircle
        color={"#4b1794"}
        size={68}
        onClick={onClickRight}
      />
    </div>
    </div>
  );
}

