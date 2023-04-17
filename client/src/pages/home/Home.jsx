import React from "react";
import "./Home.scss";

import Featured from "../../components/featured/Featured";
import JobHome from "../../components/jobHome/JobHome";
import ShowCategorie from "../../components/showCategorie/ShowCategorie";





function Home() {
  return (
    <div className="home">
      <Featured />
     <ShowCategorie/>
    

      
   <JobHome />
    
     
    </div>
  );
}

export default Home;