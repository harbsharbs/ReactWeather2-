var React = require('react');

var WeatherMessage = ({details, location}) => {
  return (
    <div>
      <h3>It's {details.temp} degrees in {location}</h3>
    </div>
  );
};
module.exports = WeatherMessage;
