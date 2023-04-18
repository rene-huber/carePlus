import React from "react";
import "./Job.scss";
// import { Slider } from "infinite-react-carousel/lib";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";

function Job() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["job"],
    queryFn: () =>
      newRequest.get(`/jobs/one/${id}`).then((res) => {
        return res.data;
      }),
    });
    
 
  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="job">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="left">
           
           
            {/* {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="user"> <h1>{data.title}</h1>
               
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/img/star.png" alt="" key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )} */}
            <Carousel showArrows={true}>
              {data.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
            </Carousel>
           
           
            <Reviews jobId={id} />
          </div>
          <div className="right">
          {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="seller">
              <div className="box">
              <img src={dataUser.img || "/img/noavatar.jpg"} alt="" />
                <div className="user">
                 
                  <div className="info">
                    <h2>{data.title}</h2>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/img/star.png" alt="" key={i} />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <h5>Über mich</h5>
            <p>{data.desc}</p>
                  </div>
                </div>
                {/* <div className="box"> */}
                  <div className="items">
                   
                    <div className="item">
                      <span className="title">Mitglied seit</span>
                      <span className="desc">Feb 2023</span>
                    </div>
                  
                  
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English - Spanish - German</span>
                    </div>
                  </div>
                 
                  {/* <p>{dataUser.desc}</p> */}
                </div>
              </div>
            )}
            {/* <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/img/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div> */}

            <div className="price"><Link to={`/pay/${id}`}>
            <button>Continue</button>
            </Link>
            <h4>pro Stunde € {data.price}</h4>
            </div>
          
           
            
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Job;