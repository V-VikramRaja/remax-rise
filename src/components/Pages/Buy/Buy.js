import React, { useState } from "react";
import TokenGen from "../../TokenGen";
import "./Buy.css";
import Card from "./Card/Card";
import { useEffect } from "react";

const Buy = () => {
  const [response, setResponse] = useState(null);
  const [buyImg, setBuyImg] = useState("by-1");
  let bgImgs = [
    "",
    "by-1",
    "by-2",
    "by-3",
    "by-4",
    "by-5",
    "by-6",
    "by-7",
    "by-8",
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
      setBuyImg(bgImgs[i]);
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  const sendData = async () => {
    const baseUrl = "https://api.rexsoftware.com";
    const endPoint = "/v1/rex/Properties/search/#all";
    const url = baseUrl + endPoint;

    try {
      const YOUR_TOKEN = await TokenGen();
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
          Authorization: `Bearer ${YOUR_TOKEN}`,
          "Content-Type": "application/json",
          "X-Api-Option":
            "use_status_codes=true,add_request_prefixes=true,use_strict_arguments=false,strip_response_prefixes=false",
        },
        body: JSON.stringify({ id: 2 }),
      });

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    sendData();
    return () => {};
  }, []);

  return (
    <div className="buy-section">
      <div className="buy-slider" id={buyImg}></div>
      <div className="all-prop-cards-container">
        {response &&
          response.result.rows.map((res) => {
            return <Card res={res} key={res._id} />;
          })}
      </div>
      {/* {response && <pre>{JSON.stringify(response.result.rows, null, 2)}</pre>} */}
    </div>
  );
};

export default Buy;
