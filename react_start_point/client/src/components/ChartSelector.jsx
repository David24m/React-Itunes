import React from "react"

const ChartSelector = (props) => {

  const options = props.chart.map( (song, index) => {
    return <option value={index} key={index}>{song["im:name"].label}</option>
})

function handleChange(event) {
props.onSongSelected(event.target.value);
}


return (
  <select defaultValue="default"
    name="chart-selector"
    id="chart-selector"
    onChange={handleChange}>
    <option disabled value="default">Choose a song...</option>
    {options}
  </select>
  )
};

export default ChartSelector;
