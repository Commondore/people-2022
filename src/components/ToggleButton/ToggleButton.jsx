import styles from "./ToggleButton.module.css";
import cn from "clsx";

const ToggleButton = ({ show, toggle, children }) => {
  return (
    <button className={cn("btn", show && styles.danger)} onClick={toggle}>
      {children}
    </button>
  );
};

export default ToggleButton;
