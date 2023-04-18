import React from "react";
import "./jobCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const jobCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  }); 
  return (
    <Link to={`/job/${item._id}`} className="link">
      <div className="jobCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img src={data.img || "/img/noavatar.jpg"} alt="" />
              <span>{item.title}</span>
              <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
            </div>
          )}
          <hr />
          <p>{item.desc.slice(0, 115)} read more</p>
          
        </div>
 
        <div className="detail">
          <div className="corazon"><img src="./img/heart.png" alt="" /></div>
          <div className="price">
            <span>Pro Stunde</span>
            <h2>$ {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default jobCard;
