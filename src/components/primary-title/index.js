import "./style.scss";

export default function PrimaryTitle(props) {
  var classnames = "primary-title5685 " + props.className;
  return (
    <p {...props} className={classnames}>
      {props.children}
    </p>
  );
}
