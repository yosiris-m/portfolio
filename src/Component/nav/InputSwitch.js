import "./InputSwitch.scss";
import cx from "classnames";

function InputSwitch({ rounded = false, isToggled, onToggled }) {
  const sliderCx = cx("slider", {
    rounded: rounded,
  });
  return (
    <div className="switchBox">
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={onToggled} />

        <span className={sliderCx} />
      </label>
    </div>
  );
}

export default InputSwitch;
