var React = require('react')

// onSubmit we call the user defined function onFormSubmit
// onFormSubmit takes an event object
var WeatherForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault(); // prevents the page from loading again
    var location = this.refs.location.value;
    // data validation
    if (location.length > 0){
      this.refs.location.value = ''; // clear value
      this.props.onSearch(location); // calling the search function (parent function) passing the location variable
    }
  },
  render: function() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
            <div>
              <input type="text" ref="location" placeholder="Enter city here"/>
            </div>
            <div>
              <button>Get weather</button>
            </div>

        </form>
      </div>
    );
  }
});

module.exports = WeatherForm
