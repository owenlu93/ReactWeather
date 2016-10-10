var React = require('React');


// var About = React.createClass({
//   render: function () {
//     return (
//       <h2>About component</h2>
//     );
//   }
// });

// do not maintain state so it can be refactored with arrow keys
var About = (props) => {
  return <h2>About component</h2>
};

module.exports = About;
