import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import notAvailImg from "../../../../images/img-not-avail.jpeg";
import "./Details.css";
import { FaBed } from "react-icons/fa";
import { BiBath } from "react-icons/bi";

export default function Details() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <div className="details-main">
      <section className="section-1">
        <h1>
          {data.adr_street_name}, {data.adr_street_number}
        </h1>
        <h3>{data.adr_suburb_or_town}</h3>
      </section>

      <section className="section-2">
        <div className="details_leftpart">
          <img
            className="details_imgs"
            src={data.property_image ? data.property_image._url : notAvailImg}
            alt=""
          />
        </div>
        <div className="details_Rightpart">
          <h1>Price</h1>
          <h3>{data.system_search_key}</h3>
          <p>Property Type: {data.property_category.text}</p>
          <p>
            <FaBed size="20" className="bed-bath-icon" />
            <BiBath size="20" className="bed-bath-icon" />
          </p>
          <div className="hero-buttons">
            <button className="hero-btn-1">
              <NavLink
                exact="true"
                to="/buy"
                activeclassname="active"
                className="hero-nav-links-1"
              >
                VIEW MORE
              </NavLink>
            </button>
            <button className="hero-btn-2">
              <NavLink
                exact="true"
                to="/contact"
                activeclassname="active"
                className="hero-nav-links-2"
              >
                BOOK APPOINMENT
              </NavLink>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
