import React from "react";
import style from "./Testingit.module.css";

const Testingit = props => (
  <img
    className={style.bin}
    src={"https://image.freepik.com/free-icon/trash-bin-symbol_318-10194.jpg"}
    alt={"bin"}
    onClick={props.onDelete}
  />
);

export default Testingit;
