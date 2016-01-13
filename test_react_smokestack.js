var smokestack = require('smokestack')

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function () {
    return React.DOM.div(null, "Hello World");
            }

});

ReactDOM.render(React.createFactory(HelloWorld)(), document.body);


      smokestack.capture('0001.png', function(err) {
              if (err) throw err
              window.close()
            })
