import React from 'react';
import ReactDOM from 'react-dom';
import ChartContainer from "./containers/ChartContainer"

window.addEventListener('load', function () {
  ReactDOM.render(
    <ChartContainer />,
    document.getElementById('app')
  );
});
