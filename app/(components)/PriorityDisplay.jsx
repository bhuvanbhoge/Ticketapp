import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faStar}
        className={` pr-1 ${
          priority > 0 ? "text-yellow-400" : "text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={` pr-1 ${
          priority > 1 ? "text-yellow-400" : "text-slate-500"
        }`}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={` pr-1 ${
          priority > 2 ? "text-yellow-400" : "text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={` pr-1 ${
          priority > 3 ? "text-yellow-400" : "text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={` ${priority > 4 ? "text-yellow-400" : "text-slate-400"}`}
      />
    </div>
  );
};

export default PriorityDisplay;
