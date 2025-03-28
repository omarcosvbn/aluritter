import classNames from "classnames";

export default function Header(props) {
  const btnClass = classNames("px-[8px] py-[5px] rounded-[4px] text-white", props.email ? "bg-red" : "bg-green");

  return (
    <header className="flex justify-between items-center px-[20px] py-[8px] bg-white shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]">
      <h3 className="font-normal text-[18px] text-primary">aluritter</h3>
      <div className="flex justify-center items-center gap-[10px]">
        <p className="font-normal text-[14px]">
          {props.email ? props.email : ""}
        </p>
        <button className={btnClass}>{props.email ? "Log out" : "Log in"}</button>
      </div>
    </header>
  );
}
