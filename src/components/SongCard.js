import React from "react";
import Rating from "./Rating";
import PropTypes from "prop-types";

const SongCard = (data) => {

  return (
    <div key={data.songs.id}>
      {data.songs.map((x, i) => {
        return (
          <div className="song-card" key={data.songs[i].id}>
            <img src={data.songs[i].thumb} alt="Images" />
            <p className="song-title">
              {data.songs[i].title} by {data.songs[i].artist}
            </p>
            <div className="rating">
              <Rating stars={data.songs[i].rating} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

SongCard.defaultProps = {
  active: false,
};

SongCard.propTypes = {
  data: PropTypes.shape({
    //shape to the object that we are accepting)
    thumb: PropTypes.string,
    title: PropTypes.string,
    artist: PropTypes.string,
    rating: PropTypes.number,
  }),
};
export default SongCard;
