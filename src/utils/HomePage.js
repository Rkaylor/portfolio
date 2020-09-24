import React from "react";

import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

function HomePage(props) {
return(
    <div>
    <Hero title={props.title} subTitle={props.subTitle} subText={props.subText} />
    <Carousel />
    </div>

    );
};



export default HomePage;