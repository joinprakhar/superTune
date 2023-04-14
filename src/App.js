import React, { Component } from "react";
import SongCard from "./components/SongCard";
import songs from "./services/songs";



class App extends Component {

state = {
    songs: [...songs]
  };

handleSortByTitle = () => {
  const sortedSongs = [...this.state.songs].sort((a, b) =>
    a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
  );

  this.setState({ songs: sortedSongs });
};

handleSortByRating = () => {
  const sortedSongs = [...this.state.songs].sort((a, b) => b.rating - a.rating);
  console.log("Sorted songs by rating:", sortedSongs);
  this.setState({ songs: sortedSongs });
};

render() {

  return (
    <div id="super-tunes">
      <h2 id="st-title">SuperTunes - Songs of the Week</h2>
      <button className="st-btn"
        onClick={this.handleSortByTitle}>Sort by Title</button>
      <button className="st-btn" onClick={this.handleSortByRating}>Sort by Rating</button>
      <SongCard songs={this.state.songs} />
    </div>
  );
};
}


export default App;
