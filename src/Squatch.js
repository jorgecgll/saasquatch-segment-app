import React from "react";
import getToken from "./jwt";
class Squatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ""
    };
  }

  changeHandler = e => {
    this.setState({ key: e.target.value });
  };

  loadWidget(key) {
    window.squatch.ready(function() {
      const user = window.analytics.user();
      const id = user.id();
      const initObj = {
        // Replace with your tenant alias in the SaaSquatch app
        tenantAlias: "test_a77p9gyhb06ks",

        // Replace your widgetType and programID in the SaaSquatch app
        widgetType: "p/referral-program/w/referrerWidget",
        programId: "referral-program",

        user: {
          id,
          accountId: id,
          email: user.email,
          name: user.name
        },

        // TODO: remove appDomain
        appDomain: "https://staging.referralsaasquatch.com",

        engagementMedium: "EMBED",

        // Read more about JWT here
        // https://docs.referralsaasquatch.com/topics/json-web-tokens/
        jwt: {}
      };

      initObj.jwt = getToken(initObj.user, key);

      window.squatch
        .widgets()
        .upsertUser(initObj)
        .then(response => {})
        .catch(error => {
          console.log(error);
        });
    });
  }

  render() {
    return (
      <div>
        <input
          placeholder="Enter API key"
          type="text"
          value={this.state.revenue}
          onChange={this.changeHandler}
        />
        <button onClick={() => this.loadWidget(this.state.key)}>
          Load Widget
        </button>
        <div id="squatchembed" />
      </div>
    );
  }
}

export default Squatch;
