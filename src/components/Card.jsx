import React from "react";
import tag from "../images/tag.png";

const Card = (props) => {
  return (
    <section className="card">
      <img src={props.img} alt="card-img" />
      <div className="card-texts">
        <div className="card-location">
          <img src={tag} alt="location tag" className="tag" />
          <span>{props.location}</span>
          <span>
            <a href={props.mapUrl}>View on google Maps</a>
          </span>
        </div>
        <h1 className="card-title">{props.title}</h1>
        <p className="card-dates">{props.startDate} - {props.endDate}1</p>
        <p className="card-disc">
          {props.description}
        </p>
      </div>
    </section>
  );
};

export default Card;
