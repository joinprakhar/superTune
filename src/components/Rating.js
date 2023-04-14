import React from "react";

const Rating = (props) => {
  const { stars } = props; // get the stars prop from props object
  const starArray = Array.from({ length: Math.round(stars <= 5 ? stars : 0) }, (_, index) => (
    <div key={index} className="star">

    </div>
  ));
  return <div>{starArray}</div>;
};

export default Rating;


/* Another method
 const { stars } = props; // get the stars prop from props object
  //const starArray = []; // create an array to hold the stars
  //for (let i = 0; i < stars; i++) {
  //starArray.push(<div key={i} className="star"></div>); // add a div with the star icon to the array
  //}
  //return <div>{starArray}</div>; // return the array of stars*/