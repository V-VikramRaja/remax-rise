import React from "react";
import notAvailImg from "../../../../images/img-not-avail.jpeg";
import "./Card.css";
import { FaBed } from "react-icons/fa";
import { BiBath } from "react-icons/bi";
// import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div key={props.res._id} className="prop-showcase-card">
      {/* <Link to="/details" state={props.res} className="dt-link"> */}
      <div className="prop-showcase-card-top-container">
        <img
          src={
            props.res.property_image
              ? props.res.property_image._url
              : notAvailImg
          }
          className="prop-showcase-card-img"
          alt="property"
        />
      </div>
      {/* </Link> */}
      <div className="prop-showcase-card-mid-container">
        <p>$Price</p>
        <div className="prop-current-status">
          <p>{props.res.property_category.text}</p>
        </div>
      </div>
      <div className="prop-showcase-card-bottom-container">
        <p>{props.res.system_search_key}</p>
        <p>
          <FaBed size="20" className="bed-bath-icon" />
          <BiBath size="20" className="bed-bath-icon" />
        </p>
      </div>
    </div>
  );
}
