import React from 'react'
import './Carouselath.css'
import {Link} from 'react-router-dom'


function Carouselath() {
    
    return (
      
        <div className="backgrd">
        
        <div className=" text-center p-3 background text-white ">
        <div className="my-1">
          <h3 className="ath-title1 ">ATHLETES<i className="fas fa-angle-down" /></h3>
          <h3 className="ath-title2"><Link to='/Athletes'>See All Athletes </Link></h3>
        </div>
        
        <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
          <div className="carousel-inner w-100" role="listbox">
            <div className="carousel-item row no-gutters active  ">
              <div className="col-2 float-left  "><img className="img-fluid" src="./athcard1.png" alt="ath01" /></div>
              <div className="col-2 float-left "><img className="img-fluid" src="./athcard2.png" /></div>
              <div className="col-2 float-left "><img className="img-fluid" src="./athcard3.png" /></div>
              <div className="col-2 float-left "><img className="img-fluid" src="./athcard4.png" /></div>
              <div className="col-2 float-left "><img className="img-fluid" src="./athcard5.png" /></div>
              <div className="col-2 float-left "><img className="img-fluid" src="./athcard6.png" /></div>
            </div>
            <div className="carousel-item row no-gutters">
              <div className="col-2 float-left  "><img className="img-fluid" src="./athcard1.png" /></div>
              <div className="col-2 float-left "><img className="img-fluid" src="./athcard2.png" /></div>
              <div className="col-2 float-left "><img className="img-fluid" src="./athcard3.png" /></div>
              <div className="col-2 float-left "><img className="img-fluid" src="./athcard4.png" /></div>
              <div className="col-2 float-left "><img className="img-fluid" src="./athcard5.png" /></div>
              <div className="col-2 float-left "><img className="img-fluid" src="./athcard6.png" /></div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <br />
      </div>
      
      
        </div>
    )
}

export default Carouselath
