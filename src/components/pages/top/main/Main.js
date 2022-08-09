import "./Main.css";
import React from "react";
import { Data20, Data21, Data22 } from "../../../EachYear";

export default function Main(props) {
  return (
    <div className="main">
      <Data22 />
      <Data21 />
      <Data20 />
      {/* <Data21 />
      <Data21 />
      <Data21 />
      <Data21 /> */}
    </div>
  );
}
