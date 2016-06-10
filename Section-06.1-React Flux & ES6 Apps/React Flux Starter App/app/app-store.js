var AppDispatcher = require('dispatcher');
var AppConstant = require('app-constants');
var assign = require('object-assign');

var EeventEmitter = require('events').EventEmitter;

var CHANGE_EVENT  = "change";
var _catalog = [];

for(var i = 1;i<5;i++){
	_catalog.push({
		'id' : 'cart'+i,
		'title' : 'Title Product',
		'details' : 'Title Product',
		'description' : 'Title Product',
		'cost' : i
	})
}
var _cartItem = [];
fucntion _addItem(item){
	if(! item.inCart){
		item['qty'] = 1;
		item['inCart'] = true ;
		_cartItem.push(item);
	}
	else{
		_cartItem.forEach(function(cartItem, index){
			if(cartItem.index == item.id){
				__incItem(index);
			}
		});
	}
}
function _removeItem(index){
	_cartItem[index].inCart = false;
	_cartItem.splice(index, 1);
}
function _incItem(index){
	_cartItem[index].qty ++;
}
function _decItem(index){
	if(_cartItem[index].qty > 1){
		_cartItem[index].qty  -- ;
	}
	else{
		_removeItem(index);
	}
}
function _cartTotal(){
         var qty = 0 , total = 0;
         _cartItem.array.forEach( function(cartItem) {
         	qty += cartItem.qty;
         	total +=cartItem.qty * cartItem.cost;
         });
         return {'qty' : qty , 'total': total}
}
AppDispatcher.register(function(payload){
	var action = payload.actionType;
	switch(action){
		case AppConstant.ADD_ITEM :
		_addItem(item)
		//emit change-event and notify app
		break;
		case AppConstant.REMOVE_ITEM :
		_removeItem(payload.index)
		break;
		case AppConstant.INC_ITEM :
		_incItem(payload.index)
		break;
		case AppConstant.DEC_ITEM :
		_decItem(payload.index)
		break;	
		default : 	
	}
})

Var AppStore = assign(EventEmitter.prototype, {

	emitChnage : function(){
		this.emitChange(CHANGE_CHANGE)
	},
	addChangeListener : function(callabck){
		this.on(CHANGE_EVENT,callback)
	},
	getCart : function(){
		return _cartItem;
	},
	getCatalog : function(){
		return _catalog;
	},
	getCartTotal : function(){
		return _cartTotal();
	}

})