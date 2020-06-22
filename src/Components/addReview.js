import React, { Component } from 'react'
import {Row ,Col , Form, Button} from 'react-bootstrap';

export default class AddReview extends Component {
  constructor(props){
      super(props)
      this.state = {
        names: '' ,
        title: '' ,
        email : 'test@email.com', 
        comment : '',
        selectedOption: 0,
        sucess: false,
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
  handleChanges(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption:  changeEvent.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault(); 
    const today = Date.now();
    let date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(today);
    var oldItems = JSON.parse(localStorage.getItem('reviewData')) || [];
    if(this.state.selectedOption !== 0){
      let myObject = {
        Date: date,
        Name: event.target[0].value,
        Title: event.target[1].value,
        color: "#7ccfff",
        comment: event.target[8].value,
        rating: parseFloat(this.state.selectedOption),
        review: 99,
        
    };
    oldItems.push(myObject)
    localStorage.setItem('reviewData', JSON.stringify(oldItems));
    this.setState({  names: '' ,title: '' , comment : '' , sucess : true})
    this.props.reload();
    this.change = setTimeout(() => {
      this.setState({sucess : false})
    }, 2000)
    }else{
     alert('!Oops : Please Add Rating');
    }

  }
  render() {
    return(
      <div className="review-add">
      <h4>Add Your Review</h4>
  
      
      <Form onSubmit={this.handleSubmit}>
      <Form.Group  as={Row} controlId="formPlaintextName">
         <Form.Label column sm="2" >Name</Form.Label>
         <Col sm="10">
       
            <Form.Control placeholder="Name" name="names" id="formName" required  value={this.state.names} onChange={this.handleChanges}  />
          </Col>
      </Form.Group>
      <Form.Group  as={Row} controlId="formPlaintextName">
         <Form.Label column sm="2" >Title</Form.Label>
         <Col sm="10">
       
            <Form.Control placeholder="Title" name="title" required  value={this.state.title} onChange={this.handleChanges}  />
          </Col>
      </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly name="email"   value={this.state.email}  />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextRating" >
          <Form.Label column sm="2">
            Rating
          </Form.Label>
          <Col sm="10">
          <div className="staradd">
            <input id="star1" type="radio" name="rank"    value="5" onChange={this.handleOptionChange}  />
            <label htmlFor="star1" > ★ </label>
            <input id="star2" type="radio" name="rank"   value="4" onChange={this.handleOptionChange}  />
            <label htmlFor="star2" > ★   </label>
            
            <input id="star3" type="radio" name="rank"  value="3" onChange={this.handleOptionChange}  />
            <label htmlFor="star3" > ★ </label>
            
            <input id="star4" type="radio" name="rank"  value="2" onChange={this.handleOptionChange}  />
            <label htmlFor="star4" > ★ </label>
            
            <input id="star5" type="radio" name="rank"     value="1" onChange={this.handleOptionChange}  />
            <label htmlFor="star5" > ★ </label>
          </div>
         
           
       
          </Col>
        </Form.Group>
    
       
        <Form.Group  as={Row} controlId="formPlaintextName">
              <Form.Label column sm="2" >Comment</Form.Label>
             <Col sm="10">
              <Form.Control name="comment" as="textarea"  required rows="3" value={this.state.comment} onChange={this.handleChanges} />
          </Col>
      </Form.Group>
      <Form.Group  as={Row} controlId="formPlaintextName">
      <Col sm="2"></Col>
      <Col sm="3">
      <Button id="submitReview" variant="primary" className="mybtn" type="submit">Submit</Button>
      </Col>
      {this.state.sucess ?  <Col className="text-right"><div className="checkmarkcircle"><div className="background"></div><div className="checkmark draw"></div></div><div className="text-success sucess-text">Sucessfully submit!</div> </Col> : '' }
      </Form.Group>
    
                 
        
    
      </Form>
    
    
    
    </div>
    )
  }
}
