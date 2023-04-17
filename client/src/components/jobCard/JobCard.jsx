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
  }); console.log(item);
  return (
    <Link to={`/job/${item._id}`} className="link">
      <div className="jobCard">
        <img src={item.cover} alt="" />
        <div className="info">
        <h2>{item.title}</h2>
          <p>{item.desc}</p>
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img src={data.img || "/img/noavatar.jpg"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>$ {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default jobCard;
