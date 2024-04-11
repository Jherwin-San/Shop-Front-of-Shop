import { Rating } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

const StarRating = () => {
  return (
    <div className="cursor-default">
      <Rating key={Math.random()} value={4} unratedColor="amber" readonly />
    </div>
  );
};

export default StarRating;
