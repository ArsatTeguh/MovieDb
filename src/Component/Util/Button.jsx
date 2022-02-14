import React from "react";

const Buttons = (props) => {
  let [click, setClick] = React.useState(false);
  return (
    <>
      <button onClick={() => setClick((click = !click))} className="btn-main5">
        {props.judul}
      </button>
      <div className="jawaban">
        <p className={click ? 'jawaban-on' : ''} >{props.jawaban}</p>
      </div>
    </>
  );
};

export default Buttons;
