installation & SETUP
================

```Javascript
mkdir Myapp
cd Myapp
npm init
npm install --save babel-core babel-loader babel-preset-react
npm install --save react react-dom
npm install --save babel webpack  webpack-dev-server
touch index.html app.js webpack.config.js
```

```Javascript
webpack.config.js 

module.exports = {
  entry: [
    './app.js'
  ],
  output: {
    path: __dirname + '/',
    filename: "index.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" , query : { presets : ['react'] }}
    ]
  }
};
```

React JS 
====================
<a name="README">[<img src="https://avatars2.githubusercontent.com/reactjs-cn" width="50px" height="50px" />](https://github.com/kumartarun/React-JS-Starter-apps.git)</a>

Creating components app.js
====================
```Javascript
var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
});
ReactDOM.render(<HelloWorld />, document.getElementById('app'));
```

Contact
====================
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/MARTIN2.png" />](http://gennexttraining.herokuapp.com/)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/github.png" />](https://github.com/tkssharma)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/mail.png" />](mailto:tarun.softengg@gmail.com)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/linkedin.png" />](https://www.linkedin.com/in/tkssharma)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/twitter.png" />](https://twitter.com/tkssharma)
