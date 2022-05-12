import React from 'react';
import Footer from '../../SharedPage/Footer/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Exceptional from '../Exceptional/Exceptional';
import HomeAppoint from '../HomeAppoint/HomeAppoint';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <HomeAppoint></HomeAppoint>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;