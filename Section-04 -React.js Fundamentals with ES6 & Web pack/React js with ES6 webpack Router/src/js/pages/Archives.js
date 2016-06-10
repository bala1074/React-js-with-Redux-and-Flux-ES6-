import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].filter((item) =>  { 
      if(article == item){
        return <Article key={item} title={item}/>
      }
       } );

    return (
      <div>
        <h1>Archives</h1>
        article: {article}
        <div class="row">{Articles}</div>
      </div>
    );
  }
}
