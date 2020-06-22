import React from 'react';
import {Row ,Col } from 'react-bootstrap';
import AddReviews from './addReview';
function allReviews(props){
    const CallReviewData = 
    [].concat(props.data)
    .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
    .map((data, index) => 
        <div className="each-review" key={index}>
          <Row >  
            <Col sm={2} xs={12} >
              <div className="profile">
                <div className="profile-pic" style={{backgroundColor : data.color }}>
                  {data.Name.slice(0 ,1)}
                </div>
                <label className="name">{data.Name}</label>
                <label className="star">{data.Date}</label>
              </div>
            </Col>
            <Col sm={10} xs={12} >
              <div className="stars detail" dangerouslySetInnerHTML={mystar(data.rating)} />
              <div className="heading">{data.Title}</div> 
              <div className="detail">{data.comment}</div> 
            </Col>
          </Row>
      </div>
  )
  function mystar(e){
    let value = ''
    for(var i = 0; i <= 4; i++){
      if(i < e){
        value += '<span class="select"></span>'
      }else{
        value += '<span></span>'
      }
    }
    return  {__html: value};;
  }
    return(
        <Row className="top-area box">
          
         {props.visible ? <Col sm={8} xs={12} > 
        <AddReviews reload={props.reload}></AddReviews>
        </Col> : ''} 
        <Col sm={6} xs={12} >
        <h2 >Reviews</h2>  
        </Col>
        <Col sm={6} xs={12} className="text-right" >
        {props.visible ? '' :<button variant="primary" onClick={props.show} className="btn btn btn-light btn-review">Write A Review</button>
          }
        </Col>
        
      
        <Col sm={12} xs={12} className="border-line"></Col>
        <div className="review-area">
            {CallReviewData}
            
        </div>
    </Row>
    )
}
export default allReviews;