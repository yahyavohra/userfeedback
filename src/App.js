import React, { Component , Fragment } from 'react'
import {Container,Row ,Col } from 'react-bootstrap';
import './App.css';

import RatingCount from './Components/ratingCount';
import reviewData from './Data/reviewData.json';
import AllReviews from './Components/all-Review';
import TrendGraph from './Components/trendGraph'
import LoginAuth from './Components/loginAuth';


export default class App extends Component {
  constructor(props){
    super(props)
    this.wrapper = React.createRef();
    this.state = {
      show: false , 
      validlogin : false, 
      loacaldata : false,
      allReview: [],
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handlevalidlogin = this.handlevalidlogin.bind(this);
    this.updateReview = this.updateReview.bind(this);
  }
 
  handleClose = (event)  => {
    this.setState({
      show: false
    })
  } 
  handleShow = (event)  => {
    this.setState({show: true})
  }
  updateReview = (event) =>{
    let myObj_deserailized = JSON.parse(localStorage.getItem("reviewData"))
    this.setState({allReview : myObj_deserailized})
  }
 handlevalidlogin = (event) => {
    this.setState({
      validlogin : true, 
    })
 }
 componentWillMount() {
      let myObj_deserailized = JSON.parse(localStorage.getItem("reviewData"))
       if (myObj_deserailized === null){
            let myObj_serailized = JSON.stringify(reviewData)
            localStorage.setItem("reviewData" , myObj_serailized)
            myObj_serailized = JSON.parse(localStorage.getItem("reviewData"))
             
             this.setState({allReview : myObj_serailized})
       }else{
          this.setState({allReview : myObj_deserailized})
       }
  }


  render() {
    return(
      <Container ref={this.wrapper} className="container"  fluid="xl">
        
        <Row className="top-area box">
          <Col sm={4} xs={12}>
              <RatingCount data={this.state.allReview} ></RatingCount>
          </Col>
          <Col sm={8} xs={12} > 
            <TrendGraph></TrendGraph>
          </Col>
        </Row>
      <AllReviews show={this.handleShow} data={this.state.allReview} reload={this.updateReview} visible={this.state.validlogin}></AllReviews>
      <LoginAuth ref={this.wrapper} show={this.state.show} onHide={this.handleClose} valid={this.handlevalidlogin} ></LoginAuth>
    </Container>
)
  }
}


