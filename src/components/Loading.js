var Loading = React.createClass({displayName: "Loading",
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("div", null, "Yea yea yea"), 
        React.createElement("div", null, "Yea yea yea"), 
        React.createElement("div", null, "Yea yea yea"), 
        React.createElement("div", null, "Yea yea yea"), 
        React.createElement("canvas", null)
      )
    );
  }
});

module.exports = Loading;
