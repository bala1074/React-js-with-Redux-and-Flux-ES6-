var Appdispatcher = require('../dispatcher/app-dispatcher');
var Appconst = require('../constant/Appconst');

var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _catalog = [];
var _cartItem = [];

function _additem(item){
	if(! item.inCart){
		item['qty'] = 1;
		item['inCart'] = true;
		_cartItem.push(item);
	}
	else
	{
		_cartItem.forEach(function(cartitem,index){
			if(cartitem.id === item){
				_incitem(index)
			}
		})
	}
}
function incItem(index){
_cartItem[index].qty++;
}
function decItem(index){
   if(_cartItem[index].qty > 1){
    _cartItem[index].qty -- ;	
   }
   else{
     _removeItem(index);
   }
}
function _removeItem(index){
	_cartItem[index].inCart = false ;
	_cartItem.splice(index,1);
}
for(var i=0; i < 5 ; i++){
	_catalog.push({
		'id' : 'widget' + i ,
		'title' : 'widget ##' +i ,
		 'summary' : 'my products ' +i,
		 'description' : 'shopping cart products',
		  'cost' : i
	})
}


Appdispatcher.register(function(payload){
    switch(payload.actionType){
    	case Appconst.ADD_ITEM :
    	_additem(payload.item);
    	todoStore.emitChnage();
    	break;
    	case Appconst.REMOVE_ITEM :
    	_removeitem(payload.index);
    	todoStore.emitChnage();
    	break;
    	case Appconst.INC_ITEM :
    	_incitem(payload.index);
    	todoStore.emitChnage();
    	break;
    	case Appconst.DEC_ITEM :
    	_decitem(payload.index);
    	todoStore.emitChnage();
    	break;
    }
});

Var todoStore = Object.assign({}, EeventEmitter.prototype , {
    getCart : function(){
    	return _cartItem;
    },
   getCatalog : function(){
    	return _catalog;
    },
    getCartTotal : function(){
    	return _cartTotal()
    },
    emitChnage : function(){
    	this.emit(CHANGE_EVENT);
    },
     addChangeListener : function(callabck){
    	this.on(CHANGE_EVENT , callabck);
    },
     removeChangeListener : function(){
    	this.removeChangeListener(CHANGE_EVENT,callabck);
    }
})