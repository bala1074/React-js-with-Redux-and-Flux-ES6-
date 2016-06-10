var React = require('react')
var ReactDOM = require('react-dom')
var AppStore = require('AppStore');

function getCatalog(){
      return {items : AppStore.getCatalog()};
}
var Catalog = React.createClass({

       getInitialState : function(){
          return getCatalog();
       }
        render: function() {
           var itemsRow = this.state.items.map(function(item){
                return (<tr key={item.id}>
                              <td>{item.id}</td>  <td>{item.cost}</td>
                              <td><AddtoCart item={item}></td>
                           </tr>);
           })

            return (<div><table><tbody>{itemsRow}</tbody></table>
            <div>);
        }
    });

