
import React from 'react';
import Navbar from '../Component/Navbar/Navbar';

const Homelaous = () => {
    return (
        <div className="flex flex-col ">

            <header  className="shadow-md sticky top-0 z-50">
                <Navbar></Navbar>
               
            </header>

            {/* <section className="  mt-2">
               
              {state=="loading"? <Loading></Loading> :<Outlet></Outlet>}  
                <section>
                     
                    <GameCard></GameCard>
                </section>
                <Footer  className="mt-5"></Footer>
            </section> */}


            

        </div>

    );
};

export default Homelaous;