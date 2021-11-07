import React, { Component } from 'react';
import Countdown from '../Countdown';
import Carouselath from '../Carouselath';
import Hero from '../Hero';
import Contestbanner from '../Contestbanner';
import Mtbpicture from '../Mtbpicture';




class Home extends Component {
  
    render(){

    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

    return (

        <div>
            
            <Countdown date={`${year}-12-24T10:00:00`} />
            
            <Carouselath/>
            <Mtbpicture />
            <img src="../sponsors2.svg" />
            



        </div>
    );
 }
}

export default Home
