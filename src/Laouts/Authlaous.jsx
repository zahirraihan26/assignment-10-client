import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Component/Footer/Footer';
import Loading from '../Component/Loading/Loading';

const Authlaous = () => {
     const {state}=useNavigation()
    return (
        <div className='flex flex-col items-center'>
             <header>
                <Navbar></Navbar>
            </header>
            <main>
             {state=="loading"? <Loading></Loading> :<Outlet></Outlet>}
            </main>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Authlaous;