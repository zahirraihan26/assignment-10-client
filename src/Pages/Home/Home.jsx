import React from "react";
import Banner from "../../Component/Banner/Banner";
import StatsSection from "../StatsSection/StatsSection";
import Moviecard from "../../Component/Moviecard/Moviecard";


const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <StatsSection></StatsSection>
      </div>
      <div className="flex flex-col items-start">
        <h1 className="font-bold text-4xl p-3">Top Rated Movies</h1>
        <p className="font-semibold text-2xl p-3">The highest-rated films in our collection</p>
        <Moviecard></Moviecard>
      </div>
      <div className="flex flex-col pt-4 items-start">
        <h1 className="font-bold text-4xl p-3">Recently Added</h1>
        <p className="font-semibold text-2xl p-3">Fresh additions to the collection</p>


      </div>
    </div>

  );
};

export default Home;
