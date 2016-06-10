var React = require('react')
var ReactDOM = require('react-dom')
var AppStore = require('AppStore');

function getCart(){
      return {items : AppStore.getCarts()};
}
var Cart = React.createClass({
       getInitialState : function(){
          return getCart();
       },
       componnetDidMount : function(){
          AppStore.addChangeListerner(this._onChange);
       },
          componnetWillUnMount : function(){
          AppStore.removeChangeListerner(this._onChange);
       }
    });

