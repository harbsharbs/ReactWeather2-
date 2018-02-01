var React = require('react');

var WeatherMessage = ({details, location}) => {
  return (
    <div>
      <h3>It's {details.temp} degrees in {location}</h3>
      <p> Today's high is: {details.max} </p>
    </div>
  );
};
module.exports = WeatherMessage;
