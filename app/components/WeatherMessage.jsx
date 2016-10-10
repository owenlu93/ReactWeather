var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function() {
//       var {temp, location} = this.props;
//       //var temp = this.props.temp;
//       //var location = this.props.location;
//
//       return(
//         <h1>It's {temp} in {location}</h1>
//       );
//     }
// });

var WeatherMessage = ({temp,location}) => {
  // var {temp,location}=props (old syntax)
  return(
    <h1> It's {temp} in {location}</h1>
  );
};

module.exports = WeatherMessage
