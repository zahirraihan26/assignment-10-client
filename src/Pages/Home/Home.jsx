import React from "react";
import Banner from "../../Component/Banner/Banner";
import StatsSection from "../StatsSection/StatsSection";

import Genresection from "../Genresection/Genresection";
import Abouts from "../Abouts/Abouts";
import Topratedmovie from "../Topratedmovie/Topratedmovie";
import Recentlyaddedmovie from "../Recentlyaddedmovie/Recentlyaddedmovie";



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
          <Topratedmovie></Topratedmovie>
      </div>
      <div className="flex flex-col pt-4 items-start">
        <h1 className="font-bold text-4xl p-3">Recently Added</h1>
        <p className="font-semibold text-2xl p-3">Fresh additions to the collection</p>

        <Recentlyaddedmovie></Recentlyaddedmovie>

      </div>

         {/* genra section  */}
        <div className="flex flex-col pt-4 items-start">
        

        <Genresection></Genresection>
      </div>
      <div className="py-4">
        <Abouts></Abouts>
      </div>
    </div>

  );
};

export default Home;
