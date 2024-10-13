import axios from "axios";
import React from "react";

export const showAverage = (avr) => {
  if (avr) {
    return <div className="">123</div>;
  }
};

export const getAllRatings = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/admin/allratings`, {
    headers: {
      authtoken,
    },
  });

export const setRead = async (productId, ratingId, authtoken) =>
  await axios.put(
    `${process.env.REACT_APP_API}/admin/commentRead`,
    { productId, ratingId },
    {
      headers: {
        authtoken,
      },
    }
  );

export const deleteComment = async (productId, ratingId, authtoken) =>
  await axios.put(
    `${process.env.REACT_APP_API}/admin/deleteComment`,
    { productId, ratingId },
    {
      headers: {
        authtoken,
      },
    }
  );
