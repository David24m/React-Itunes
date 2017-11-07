import React from "react";
import ChartSelector from "../components/ChartSelector"
import ChartDetail from "../components/ChartDetail"

class ChartContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chart: [],
      currentSong: null
    }
    this.handleSongSelected = this.handleSongSelected.bind(this)
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      console.log(data)
      this.setState({chart: data.feed.entry})
    })
    request.send();

  }


  handleSongSelected(index) {
    const selectedSong = this.state.chart[index];
    this.setState({currentSong: selectedSong});
  }

  render() {
    return (
      <div>
        <h2>Song Container</h2>
        <ChartSelector chart={this.state.chart}
        onSongSelected={this.handleSongSelected}/>
        <ChartDetail song={this.state.currentSong} />
      </div>
    )
  }
}

export default ChartContainer;
