import React from "react";
import { Link } from "react-router";
export default class extends React.Component {
  render() {
    const { title } = this.props;
   // const title = this.props.title //
    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p>Hello World From React Component </p>
        <Link class="btn btn-default" to={"archives/"+ title }>More Info</Link>
      </div>
    );
  }
}