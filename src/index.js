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

function App() {
  window.analytics.ready(function() {
    var user = window.analytics.user();
    var id = user.id();

    if (!id) {
      window.analytics.identify("f4ca124298", {
        name: "Jorge Conde",
        email: "jorge@saasquat.ch"
      });
    }
  });

  window.squatch.ready(function() {
    window.squatch.init({
      tenantAlias: "test_a77p9gyhb06ks",
      domain: "https://staging.referralsaasquatch.com"
    });
  });

  return (
    <div className="App">
      <Checkout onSubmit={value => trackPurchase(value)} />
      <Squatch />
      <h1>Segment + SaaSquatch</h1>
      <h2>
        Segment customers can use analytics.js instead of directly using the
        Squatch.js javascript library
      </h2>
      <p>
        This app is an example of how you set up a Referral Program with a
        Segment.io integration
      </p>

      <br />
      <h3>Set up Identification</h3>
      <p>
        1. Go to Destination docs
        https://docs.referralsaasquatch.com/integrations/segment-v2/subscription/{" "}
      </p>
      <p>2. Follow the steps to install de segment destination</p>
      <p>
        3. Go to Source docs
        https://docs.referralsaasquatch.com/integrations/segment-v2/stream/
      </p>
      <p>4. Follow the steps to install the segment source</p>
      <p>
        After you complete these steps, you are going to start seeing users
        coming in the portal
      </p>

      <br />

      <h3>Set up Conversion</h3>
      <p>5. Create a Referral Program in the portal</p>
      <p>6. Make sure you set up conversion on a custom user event</p>
      <p>7. Launch your program</p>

      <br />

      <h3>Set up Attribution</h3>
      <p>If you want to do attribution without our JS library, [go here.]</p>
      <p>
        8. Install Squatch.js in your app for attribution: [go to docs here]
      </p>

      <br />

      <h3>Verification Step</h3>

      <p>1. Make a referral. If you need more information, [go here.]</p>
      <p>2. Trigger the conversion event that you set up in step 6</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
