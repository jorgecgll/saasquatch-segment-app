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
        user: {
          id,
          accountId: id,
          email: user.email,
          name: user.name
        },
        appDomain: "https://staging.referralsaasquatch.com",
        tenantAlias: "test_a77p9gyhb06ks",
        engagementMedium: "EMBED",
        widgetType: "p/referral-program/w/referrerWidget",
        programId: "referral-program",
        jwt: {}
      };

      initObj.jwt = getToken(initObj.user, key);

      window.squatch
        .widgets()
        .upsertUser(initObj)
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });
    });
  }

  render() {
    return (
      <div>
        <input
          placeholder="Enter key"
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
