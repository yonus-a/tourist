import "./style.scss";

export default function Button(props) {
  var classnames = "button " + props.className;
  return (
    <button {...props} className={classnames}>
      {props.children}
    </button>
  );
}
