var  Dispatcher  = require('flux').Dispatcher;

var AppDispatcher = Object.assign({}, new Dispacther(), 
  {
  	handleViewAction : function(action){
  		this.dispatch({
  		   source : 'VIEW_ACTION',
  		   action : action
  		})
  	}
  });

module.export = AppDispatcher;