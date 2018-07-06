import React, { Component } from "react";
import { addGrocery } from "../store";
import {connect} from 'react-redux'

class AddGrocery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(evt) {
    if (evt.key === "Enter") {
      this.props.add(this.state.input);
      this.setState({ input: "" });
    }
  }

  render() {
    return (
      <div className="add-grocery">
        <input
          type="text"
          value={this.state.input}
          onChange={evt => this.setState({ input: evt.target.value })}
          onKeyDown={this.handleKey}
        />
        <button
          onClick={() => {
            this.props.add(this.state.input);
            this.setState({ input: "" });
          }}>
          Add Grocery
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({add: string => dispatch(addGrocery(string))});


export default connect(null, mapDispatchToProps)(AddGrocery)
