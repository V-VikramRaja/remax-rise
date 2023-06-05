import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
// import samplehome from "../../../images/sample home.jpg";
import client1 from "../../../images/team/Client1.0.jpeg";
import client2 from "../../../images/team/Client2.0.jpeg";
// import mainLogo from "../../../images/logo.jpeg";
// import mailLogo from "../../../images/Icons/🦆 icon _Envelope_.png";

const Home = () => {
  const [bgImg, setBgImg] = useState("bg-1");
  let bgImgs = [
    "",
    "bg-1",
    "bg-2",
    "bg-3",
    "bg-4",
    "bg-5",
    "bg-6",
    "bg-7",
    "bg-8",
  ];
  let len = bgImgs.length;
  const MINUTE_MS = 3000;
  let i = 1;
  useEffect(() => {
    const interval = setInterval(() => {
      if (i > len - 2) {
        i = 0;
      }
      i++;
      setBgImg(bgImgs[i]);
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
  return (
    <div className="Home-page">
      <section className="hero-section" id={bgImg}>
        <h1 className="hero-text">Let us guide you</h1>
        <p className="hero-para">
          For all your property needs across Ripley, Springfield, Brookwater{" "}
          <br /> and surrounding areas
        </p>
        <div className="hero-buttons">
          <button className="hero-btn-1">
            <NavLink
              exact="true"
              to="/buy"
              activeclassname="active"
              className="hero-nav-links-1"
            >
              VIEW LISTINGS
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
      </section>
      <section className="bsr-section">
        <h1 className="bsr-section-text">Real estate done differently</h1>
        <div className="bsr-imgs">
          <NavLink
            exact="true"
            to="/buy"
            activeclassname="active"
            className="bsr-buy"
          >
            BUY
          </NavLink>
          <NavLink
            exact="true"
            to="/sell"
            activeclassname="active"
            className="bsr-sell"
          >
            SELL
          </NavLink>
          <NavLink
            exact="true"
            to="/rent"
            activeclassname="active"
            className="bsr-rent"
          >
            Rent
          </NavLink>
        </div>
      </section>
      <section className="home-stmt-section">
        <p>
          A fresh approach to the property transaction. Whether you’re buying
          for the first time, wondering what you could sell your place for,
          needing someone to manage your rental or even interested in a
          commercial space, the RE/MAX Rise team are ready to help. From Ripley
          to Walloon, Brassall to Dinmore, we’ve got the neighbourhoods of
          Ipswich covered
        </p>
      </section>
      <section className="third-section">
        <h1>Properties we think you'll love</h1>
        <div className="bsrl">
          <NavLink
            exact="true"
            to="/buy"
            activeclassname="active"
            className="ts-link"
          >
            Buy
          </NavLink>
          <NavLink
            exact="true"
            to="/sell"
            activeclassname="active"
            className="ts-link"
          >
            Sell
          </NavLink>
          <NavLink
            exact="true"
            to="/rent"
            activeclassname="active"
            className="ts-link"
          >
            Rent
          </NavLink>
          <NavLink
            exact="true"
            to="/sell"
            activeclassname="active"
            className="ts-link"
          >
            Leased
          </NavLink>
        </div>
        <div className="home-props">
          <div className="indi-props indi-props-1">
            <p className="coming-soon-text">Coming Soon</p>
            {/* <img className="indi-props-img" src={comingSoon} alt="properties" /> */}
            {/* <p>$ 4,568,900</p>
            <p>13 Toulambi street, Noosa Heads QLD 4567</p>
            <p>4 Beds 4baths 4cars </p> */}
          </div>
          <div className="indi-props indi-props-2">
            <p className="coming-soon-text">Coming Soon</p>
            {/* <img className="indi-props-img" src={comingSoon} alt="properties" /> */}
            {/* <p>$ 4,568,900</p>
            <p>13 Toulambi street, Noosa Heads QLD 4567</p>
            <p>4 Beds 4baths 4cars </p> */}
          </div>
          <div className="indi-props indi-props-3">
            <p className="coming-soon-text">Coming Soon</p>
            {/* <img className="indi-props-img" src={comingSoon} alt="properties" /> */}
            {/* <p>$ 4,568,900</p>
            <p>13 Toulambi street, Noosa Heads QLD 4567</p>
            <p>4 Beds 4baths 4cars </p> */}
          </div>
        </div>
        <div className="all-props">
          <button className="props-btn">
            <NavLink
              exact="true"
              to="/buy"
              activeclassname="active"
              className="props-view-all"
            >
              VIEW ALL PROPERTIES
            </NavLink>
          </button>
        </div>
      </section>
      <section className="mot-section">
        <h2>Meet Our Team</h2>
        <div className="mot-div">
          <div className="mot-div-1">
            <img src={client1} alt="team member" className="mot-div-img"></img>
            <div className="mot-div-abt">
              <h2>Sashi Yarramsetti</h2>
              <h4>Principal</h4>
              <h5>+61 434666606</h5>
              <div className="mot-div-mail">
                <p>syarramsetti@remax.com.au</p>
              </div>
            </div>
          </div>
          <div className="mot-div-2">
            <img src={client2} alt="team member" className="mot-div-img"></img>
            <div className="mot-div-abt">
              <h2>Madhava Dudipalli</h2>
              <h4>Principal</h4>
              <h5>+61 415469369</h5>
              <div className="mot-div-mail">
                <p>mdudipalli@remax.com.au</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="filler-sec">
        <h1>We're in your area</h1>
        <h2>
          We specialize in all property needs across the Northern Brisbane and
          surrounds area.
        </h2>
      </section> */}
      {/* <section className="affiliation-section">
        <h1>Affiliations </h1>
        <p>Anti money laundering registered</p>
        <img src={mainLogo} className="nav-main-logo" alt="logo" />
      </section> */}
    </div>
  );
};

export default Home;
