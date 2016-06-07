var React = require('react')
var ReactDOM = require('react-dom')
var style = require('style');
var MyComponent = React.createClass({
            render: function() {
                return <div>
                        <h1 className="container" >{this.props.text}</h1>
                        <p>{this.props.children}</p>
                        // class="contriner"
                </div>;
            }
});

ReactDOM.render(
        	     <div>     // this.props.name
        	                   //this.props.children
	                    <MyComponent   name="Hello World"  >
	                    This is a hello.
	                    </MyComponent>

                                  //this.props.children
	                    <MyComponent text="How are You?">
	                    This is a how are you.
	                    </MyComponent>

	                    <MyComponent text="Goodbye">
	                    This is a goodbye.
	                    </MyComponent>
                    </div>
            , document.getElementById('app'));


