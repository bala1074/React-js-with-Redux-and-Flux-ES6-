var  Appconst = require( '../constant/Appconst' );
var  Appdispatcher = require( '../dispatcher/app-dispatcher')

var AppActions ={
	addItem : function(item){
		Appdispatcher.dispatch({
			actionType : Appconst.ADD_ITEM,
			item : item 
		})
	},
	removeItem : function(index){
		Appdispatcher.dispatch({
			actionType : Appconst.REMOVE_ITEM,
			index : index 
		})
	}
	incItem : function(index){
		Appdispatcher.dispatch({
			actionType : Appconst.INC_ITEM,
			index : index 
		})
	}
	decItem : function(index){
		Appdispatcher.dispatch({
			actionType : Appconst.DEC_ITEM,
			index : index 
		})
	}
} 