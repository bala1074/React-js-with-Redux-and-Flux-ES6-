var AppDispatcher = require('dispatcher');

var AppAction = {
      addItem : function(item){
        AppDispatcher.dispatch({
        	actionType : AppConstant.ADD_ITEM,
        	item : item
        })
      },
       removeItem : function(index){
        AppDispatcher.dispatch({
        	actionType : AppConstant.REMOVE_ITEM,
        	index : index
        })
      },
       increaseItem : function(index){
        AppDispatcher.dispatch({
        	actionType : AppConstant.INC_ITEM,
        	index : index
        })
      },
       decreaseItem : function(index){
        AppDispatcher.dispatch({
        	actionType : AppConstant.DEC_ITEM,
        	index : index
        })
      }

}