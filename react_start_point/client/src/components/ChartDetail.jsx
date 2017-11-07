import React from "react"

const ChartDetail = (props) => {

  if(!props.song) return null;
  return (
    <div>
      <p>Artist: {props.song["im:artist"].label}</p>
      <p>Song: {props.song["im:name"].label}</p>
      <p>Genre: {props.song.category.attributes.label}</p>
      <p>Release Date: {props.song["im:releaseDate"].attributes.label}</p>
      <img src={props.song["im:image"][0].label}></img>
    </div>
  )
}



export default ChartDetail;
