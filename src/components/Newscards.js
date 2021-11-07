import React from 'react'
import './Newscards.css';
import {Container} from 'react-bootstrap'

function Newscards() {

    return (

    <>

        <Container id="containercards">
        
        <div className="row my-5">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={"./images/downhill.jpg"} alt="" />
              <div className="card-body">
                <h4 className="card-title">
                  <a>Project One</a>
                </h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                <a href="#!" className="black-text d-flex justify-content-end">
                  <h5>Read more <i className="fas fa-angle-double-right" /></h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src="./images/downhill1.jpg" alt="" />
              <div className="card-body">
                <h4 className="card-title">
                  <a>Project Two</a>
                </h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                <a href="#!" className="black-text d-flex justify-content-end">
                  <h5>Read more <i className="fas fa-angle-double-right" /></h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src="./images/downhill3.jpg" alt="" />
              <div className="card-body">
                <h4 className="card-title">
                  <a>Project Three</a>
                </h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
                <a href="#!" className="black-text d-flex justify-content-end">
                  <h5>Read more <i className="fas fa-angle-double-right" /></h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>



    </>

 )}

export default Newscards
