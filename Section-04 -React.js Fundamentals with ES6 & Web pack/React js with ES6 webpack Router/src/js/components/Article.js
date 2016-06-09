import React from "react";

export default class extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p>Hello World From React Component </p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
