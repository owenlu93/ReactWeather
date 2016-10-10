var React = require('React');

// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h2>Examples component</h2>
//     );
//   }
// });

var Examples = (props) => {
    return(
      <div>
        <h3>Examples component</h3>
        <p>Welcoem to examples page!</p>
      </div>
    )
};

module.exports = Examples;
