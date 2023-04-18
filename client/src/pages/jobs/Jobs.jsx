import React, { useEffect, useRef, useState } from "react";
import "./Jobs.scss";
import JobCard from "../../components/jobCard/JobCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

function Jobs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: () =>
      newRequest
        .get(
          `/jobs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });
 const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

  const kate= data
  // console.log(kate[0].cat);

  return (
    <div className="jobs">
      <div className="container">
      <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Something went wrong!</p>
      ) : (
        <div>
        <h1><span style={{color:"#ccc"}}>Kategorie: </span>{capitalizeFirstLetter(kate[0].cat)}</h1>
        
        </div>
      )}
    </div>
      
        <p>
        Entdecken Sie mit Ihren Vorlieben die Option, die am besten zu Ihnen passt.
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Suche</button>
          </div>
          <div className="right">
            <span className="sortBy">Sortiere nach</span>
            <span className="sortType">
              {sort === "sales" ? "Beliebt" : "Neueste"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Neueste</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Beliebt</span>
                )}
                {/* <span onClick={() => reSort("sales")}>Popular2</span> */}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            : data.map((job) => <JobCard key={job._id} item={job} />)}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
