var React = require('React');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false,
    }
  },
  handleSearch: function(location){
    var that = this;
    that.setState({isLoading: true}); // set loading to true beforefunction call
    openWeatherMap.getTemp(location).then(function(temp){
      // state is now false
      that.setState({
        isLoading: false,
        temp: temp,
        location: location
      });
    }, function(errorMessage) {
      that.setState({
        isLoading:false
      });
      alert(errorMessage);
    });
  },
  render: function () {
    var {isLoading,temp,location} = this.state; // destructuring syntax
    // conditionally render components with the function inside a function
    // function returns jsx

    function renderMessage(){
      if(isLoading === true){
        return <h3>Fetching weather..</h3>;
      } else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h1>Get weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});


module.exports = Weather;
