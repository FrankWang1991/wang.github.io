"use strict";

var Hello = React.createClass({
  displayName: "Hello",

  getInitialState: function getInitialState() {
    return {
      opacity: 1.0
    };
  },

  componentDidMount: function componentDidMount() {
    this.timer = setInterval(function() {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  },

  render: function render() {
    return React.createElement(
      "div", {
        style: {
          opacity: this.state.opacity
        }
      },
      "Hello ",
      this.props.name
    );
  }
});

ReactDOM.render(React.createElement(Hello, {
  name: "world"
}), document.getElementById('js-container'));

//转码前

/*
 var Hello = React.createClass({
  getInitialState: function() {
    return {
      opacity: 1.0
    };
  },

  componentDidMount: function() {
    this.timer = setInterval(function() {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  },

  render: function() {
    return (
      <div style={{opacity: this.state.opacity}}>
              Hello {this.props.name}
            </div>
    );
  }
 });

 ReactDOM.render(
  <Hello name="world"/>,
  document.getElementById('js-container')
 );
*/