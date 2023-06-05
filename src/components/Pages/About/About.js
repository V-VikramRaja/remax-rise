import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./About.css";
import aboutImage from "../../../images/about-remax.jpeg";
import client1 from "../../../images/team/Client1.0.jpeg";
import client2 from "../../../images/team/Client2.0.jpeg";
// import mailLogo from "../../../images/Icons/🦆 icon _Envelope_.png";

export const About = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="about-section">
      <section className="about-section-1">
        <div className="about-section-div-1">
          <h1>
            About RE/MAX <span>RISE</span>
          </h1>
          <p>
            Sashi Yarramsetti and business partner Madhava Dudipalli opened
            RE/MAX Rise in May 2023 with a goal to meet the local community’s
            real estate needs, help people realise their home ownership goals,
            and be recognised for delivering a truly exceptional real estate
            experience covering all aspects of the process.
          </p>
          <p>
            Sashi and Madhava’s point of difference is in the merging of their
            skill sets, their expertise and knowledge. Property investment, real
            estate sales transactions and property management, finance and
            business acumen are in their pedigree.
          </p>
          <p>
            They have grown a solid client base and investor network bringing
            repeat and referral business since joining RE/MAX as sales agents,
            and now the property and finance experiences of these business
            leaders translates into great real estate experiences for their
            RE/MAX Rise customers and clients. Their passion for real estate is
            matched by a deep commitment to the local community, where both are
            actively involved.
          </p>
          <p>
            Located at Ripley, RE/MAX Rise provides high-quality real estate
            services to the vibrant and rapidly growing community and its
            surrounding Ipswich suburbs, while being part of the largest real
            estate group in the world.
          </p>

          <NavLink
            exact
            to="/contact"
            activeclassname="active"
            className="about-contact-us-nav-link"
            onClick={handleClick}
          >
            Contact Us
          </NavLink>
        </div>

        <div className="about-section-div-2">
          <img src={aboutImage} alt="Remax" className="about-section-img" />
        </div>
      </section>
      <section className="about-section-wdbwrr">
        <h1>WHY DO BUSINESS WITH RE/MAX RISE ?</h1>
        <h3>RE/MAX Rise is underpinned by experience, knowledge and values.</h3>
        <div className="about-section-wdbwrr-keys">
          <p>Our points of difference include:</p>
          <ul>
            <li>
              1. First-hand experience in property investment, sales and
              marketing
            </li>
            <li>
              2. A unique blend of skillsets in property, finance and business
            </li>
            <li>
              3. Repeat business and referrals from an established client base
            </li>
            <li>
              4. A team that’s trained to remain highly skilled and in sync with
              latest industry standards
            </li>
            <li>
              5. Hands-on support with distinctive branding, ready-to-use tested
              systems and solutions and powerful resources to facilitate the
              success of your property transaction or investment.
            </li>
          </ul>
        </div>

        <p>
          RE/MAX has more than 140,000 agents in more than 110 countries and
          territories, a global network that makes an excellent base for
          referrals and leads on buyers and sellers. The power of the RE/MAX
          name boosts business and attracts homebuyers. Worldwide, RE/MAX agents
          closed over two million total transaction sides in 2021, becoming the
          first real estate brand to do so in a single calendar year. Somewhere
          in the world, a RE/MAX agent helps someone find their perfect place
          every 30 seconds.
        </p>
      </section>
      <section className="about-mot">
        <h1>Meet Our Team</h1>
        <h3>
          With strong expertise in the industry, our team are experts in their
          field
        </h3>
        <div className="about-team-members">
          <div className="about-team-1">
            <div className="about-team-text">
              <img src={client1} alt="Madhav" className="about-client-img" />
              <div className="about-team-text-1">
                <h1>Sashi Yarramsetti</h1>
                <h4>Principal</h4>
                <h4>+0434 666 606</h4>
                <div className="mot-div-mail">
                  {/* <img src={mailLogo} alt="mail logo" className="mailLogo" /> */}
                  <p>rise@remax.com.au</p>
                </div>
              </div>
            </div>
            <div className="about-team-text-2">
              <p>
                RE/MAX Rise broker owner - Sashi Yarramsetti Sashi Yarramsetti
                took his love of real estate sales to the next level and opened
                RE/MAX Rise with business partner Madhava Dudipalli in May 2023.
              </p>
              <p>
                As broker owner and sales specialist, Sashi has enormous pride
                in the role he plays in meeting the local community’s real
                estate needs and helping people realise their home ownership
                goals. Sashi’s personal real estate interests include property
                investments across three Australian states.
              </p>
              <p>
                A highly motivated and credentialed mechanical engineer since
                2008, he has also worked with highly regarded engineering firms
                on key projects in Australia and New Zealand. Along with his
                passion and commitment to real estate is Sashi’s involvement
                with health and fitness.
              </p>
              <p>
                As a dedicated fitness professional, he established Skyz Fitness
                in 2019. As a cricket coach, he also follows his passion to help
                and develop young cricketers. Testimonials, both in real estate
                and fitness arenas, reflect Sashi’s energy and enthusiasm,
                friendly caring manner, commitment, focus on individual needs
                and excellent communication.
              </p>
              <p>
                As business owner with the world’s number one real estate brand,
                Sashi’s objective is to listen to and work with clients to
                create a stress-free real estate experience with effective sales
                and marketing processes that deliver the very best price
                possible for the seller and a satisfied buyer.
              </p>
              <p>
                When it comes to real estate, Sashi will be by your side,
                ensuring you have the best real estate experience and achieve
                the best outcome.
              </p>
            </div>
          </div>
          <div className="about-team-1">
            <div className="about-team-text">
              <img src={client2} alt="Madhav" className="about-client-img" />
              <div className="about-team-text-1">
                <h1>Madhava Dudipalli</h1>
                <h4>Principal</h4>
                <h4>+61415469369</h4>
                <div className="mot-div-mail">
                  <p>rise@remax.com.au</p>
                </div>
              </div>
            </div>
            <div className="about-team-text-2 about-team-text-last">
              <p>
                Co-owner of RE/MAX Rise, Madhava Dudipalli is a highly respected
                professional with enviable credentials across both real estate
                and finance.
              </p>
              <p>
                The fully licensed real estate agent is an experienced mortgage
                broker, operating his own business since 2020. The breadth of
                Madhava’s experience includes director in his accounting and tax
                firm, and senior finance roles with local councils in
                Queensland, Victoria and Northern Territory. He was accounts and
                finance manager with Deccan Chronicle Holdings Ltd, an A Listed
                company with a $120m-plus turnover, interests in IPL 20-20
                Cricket and retail stores, and publisher of the largest
                circulated English newspaper in South India.
              </p>
              <p>
                Madhava’s professional memberships include CAANZ (Chartered
                Accountants Australia and New Zealand), FBAA (Finance Brokers
                Association of Australia), CPA Australia and ICAI (Institute of
                Chartered Accountants of India).
              </p>
              <p>
                Having honed skills in areas such as financial accounting and
                reporting, budgeting, audits, capital projects, costing,
                compliance, forecasting, income tax and GST aspects, he has been
                awarded by industry for his achievements.
              </p>
              <p>
                A hands-on property investor himself, Madhava has experienced
                property markets through his own property companies.
              </p>
              <p>
                He is recognised for business acumen, his ability in building
                rapport, and being customer focused, result oriented and
                committed to delivering on time.
              </p>
              <p>
                As a real estate agent, investor and business owner, a mortgage
                broker/advisor and an accountant, Madhava is able to deliver a
                truly exceptional real estate experience covering all aspects of
                the process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
