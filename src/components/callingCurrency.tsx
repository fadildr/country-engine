import React, { useState } from "react";
interface DataProps {
  title?: string;
  subTitle?: string;
  dataArr?: any[];
}
export default function CallingCurrency({
  title,
  subTitle,
  dataArr,
}: DataProps) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div>
      <div className="title-calling">{title}</div>
      <div className="latlong-numbers">{subTitle}</div>
      <div className="many-countries">
        {" "}
        <span
          onMouseOver={() => {
            setIsHover(true);
          }}
          onMouseOut={() => {
            setIsHover(false);
          }}>
          {dataArr?.length} country
        </span>{" "}
        with this {title}
      </div>

      <div
        className="list-contries-currencies"
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseOut={() => {
          setIsHover(false);
        }}
        style={!isHover ? { visibility: "hidden" } : {}}>
        <ul>
          {dataArr?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
