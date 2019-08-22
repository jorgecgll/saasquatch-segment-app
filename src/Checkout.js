import React from "react";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revenue: ""
    };
  }

  changeHandler = e => {
    //TODO: validate that this is a number

    this.setState({ revenue: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          name="number"
          value={this.state.revenue}
          onChange={this.changeHandler}
        />
        <button onClick={() => this.props.onSubmit(this.state.revenue)}>
          Buy
        </button>
      </div>
    );
  }
}

export default Checkout;
