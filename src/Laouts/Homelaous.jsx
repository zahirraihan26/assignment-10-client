
import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Component/Footer/Footer';
import Loading from '../Component/Loading/Loading';

const Homelaous = () => {
    const {state}=useNavigation()
    return (
        <div className="flex flex-col items-center ">

            <header  className="shadow-md  sticky top-0 z-50">
                <Navbar></Navbar>
               
            </header>

            <section className='mt-10 min-h-screen '>
              {state=="loading"? <Loading></Loading> :<Outlet></Outlet>}
            </section>
            <section>
                <Footer></Footer>
            </section>

            {/* <section className="  mt-2">
               
                
                <section>
                     
                    <GameCard></GameCard>
                </section>
                <Footer  className="mt-5"></Footer>
            </section> */}


            

        </div>

    );
};

export default Homelaous;