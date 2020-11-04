import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
import CommentForm from './CommentForm';
import { Button } from 'reactstrap';

const CarouselPrint = () => {
  return (
    <div>
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="/img/ass1.jpg"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="/img/ass2.jpg"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="/img/ass3.jpg"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src="/img/ass4.jpg"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}

const Nature = () => {
  return (
    <div>
      <MDBContainer>
        <h1 className="heading">Do you know what’s in your air?</h1><br /><hr />
        <p>We feel there isn’t enough discussion about indoor air quality in the topic of Health and Wellness. Unlike food, water and exercise, literature about air quality seem to stay out in space, despite being one of the essential things we need as living beings here on Earth.
                       <br /><br />According to the Environmental Protection Agency, American Lung Association, and research institutions such as The Berkeley Lab, indoor air pollution is a serious health hazard, which can cause dizziness, fatigue, headaches, and if exposed long-term, can lead to more serious respiratory diseases, heart diseases, and cancer. Unfortunately, these organizations claim indoor spaces, often in urban areas, are found to be more polluted than outside. Furthermore, studies from the US and Europe show that persons in industrialized nations spend more than 90 percent of their time indoors.
                       <br /><br />The major perpetrator of air pollutants come from what’s called volatile organic compounds (VOCs). VOCs are carbon-containing organic chemicals that leak off of building materials, furnishings, consumer products, tobacco smoking, paint, people, animals, cleaning supplies, and indoor chemical reactions. Specific indoor VOCs are more toxic than others and cause havoc to our health.</p>
      </MDBContainer>
    </div>
  );
}

const Got = () => {
  return (
    <MDBContainer>
      <div className="card-columns">
        <div className="card">
          <img className="card-img-top" src="/img/plant3.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Find More About Plants</h5>
            <button type="button" className="btn btn-outline-primary"><Link to="/essentials">Find More</Link></button>
          </div>
        </div>
        <div className="card p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>68 Percent of the plants are in danger of going extinct.</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card">
          <img className="card-img-top" src="/img/plant2.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">SAVE PLANTS</h5>
            <p className="card-text">Plant species are going extinct -about 5,000 times faster than they should.<br />More than half of the plant species are native to just one country</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card bg-primary text-white text-center p-3">
          <blockquote className="blockquote mb-0">
            <p>80 Percent of the earth's original forests have been cleared or destroyed.</p>
            <footer className="blockquote-footer">
              <small>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Plants Are Important</h5>
            <p className="card-text">Bananas contain a natural chemical which can make people feel happy.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="/img/plant1.jpg" alt="Card image" />
        </div>
        <div className="card p-3 text-right">
          <blockquote className="blockquote mb-0">
            <h4>Learn how to care plants</h4>
            <button type="button" className="btn btn-outline-primary"><Link to="/care">Learn More</Link></button>
          </blockquote>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Plants in Human life</h5>
            <p className="card-text">90 percent of the foods humans Eat come from just 30 plants.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}

const Sign = () => {
  return (
    <MDBContainer>
      <div className="sign">
        <h1>Let’s stay connected</h1>
        <p>Keep in touch with the nature you love. We’ll bring trees, woods and wildlife to your home and garden, from virtual visits and craft activities to interactive quizzes and inspirational stories.</p>
        <CommentForm />
      </div>
    </MDBContainer>
  );
}


const Home = (props) => {

  const cards = props.home.map((home) => {
    return (
      <div className="container">
        <div className="card mx-3" key={home.id}>
          <img className="card-img-top" src={home.image1} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{home.name}</h5>
            <p className="card-text">{home.description1}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Save Plants</li>
            <li className="list-group-item">Plant Are Important</li>
            <li className="list-group-item">Plants Save Environment</li>
          </ul>
          <div className="card-body">
            <Link to="/menu">Visit Menu</Link>
          </div>
        </div>
      </div>
    );
  });


  return (
    <React.Fragment>
      <br /><br />
      <CarouselPrint />
      <br /><br />
      <div>
        <Nature />
      </div>
      <br /><br />
      <h1 className="heading">Discover woods, trees and wildlife</h1><hr />
      <div className="d-flex">
        {cards}
      </div>
      <br /><br />
      <div id="button">
        <button type="button" className="btn btn-primary-success btn-lg" id="button"><Link to="/menu">View All our Products</Link></button>
      </div>
      <br /><br />
      <Sign />
      <br /><br />
      <Got />
    </React.Fragment>
  );
}


export default Home;

//Like people, plants respond to extra attention.