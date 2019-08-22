import React from "react";
import ReactDOM from "react-dom";
// import JWTGenerator from "./jwt";
import Checkout from "./Checkout";
import Squatch from "./Squatch";
import "./styles.css";

const trackPurchase = value => {
  window.analytics.track("Order Completed", {
    revenue: value
  });
};

const analytics = window.analytics;
const squatch = window.squatch;

function App() {
  analytics.ready(function() {
    var user = analytics.user();
    var id = user.id();

    if (!id) {
      analytics.identify("f4ca124298", {
        name: "Jorge Conde",
        email: "jorge@saasquat.ch"
      });
    }
  });

  squatch.ready(function() {
    squatch.init({
      tenantAlias: "test_a77p9gyhb06ks",

      // TODO: remove domain
      domain: "https://staging.referralsaasquatch.com"
    });
  });

  return (
    <div className="App">
      <h1>Load Referral Widget</h1>
      <Squatch />

      <br />

      <h1>Purchase Event</h1>
      <Checkout onSubmit={value => trackPurchase(value)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
