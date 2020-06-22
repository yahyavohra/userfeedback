import React,{useState, useEffect, Fragment} from 'react';
import {Row ,Col} from 'react-bootstrap';

function RatingCount(props){
    const [dividerate, setdividerate] = useState({5: 0, 4: 0, 3: 0, 2: 0, 1: 0});
    const allReview = props.data;
    class Rating {
        constructor(){
          this.total = 0;
          this.totalrating = allReview.length * 5;
          this.count = 0;
        }
        totalRating(){
          let total = this.total;
          let totalrating =  this.totalrating;
          allReview.map((data, index) => 
              total += data.rating
          )
          this.count = total / totalrating;
          this.count = this.count * 5;
          this.count = this.count.toFixed(1)
          return this.count
        }
        totaloader(){
          let perStar = 66;
          perStar = perStar * this.totalRating();
          return perStar
        }
        totalReview(){
          let totalReview  = this.totalrating / 5;
          return totalReview;
        }
        divideRater(){
          let five = 0 ;
          let four = 0;
          let three = 0 ;
          let two = 0;
          let one = 0 ;
          
          allReview.map((data, index) => {
            let param = data.rating
            switch(param){
              case  5:
              return five = five += 1
              case  4:
              return four = four += 1
              case  3:
              return three =  three += 1
              case  2:
              return two = two += 1
              case  1:
              return one = one += 1
              default:
              return null
            }
          })
           
           let  array = { "4" : four, "3" : three, "2" : two, "1" : one , "5" : five}
          return array;
        }
      }
      useEffect(() => {
        setdividerate(rating.divideRater)
        
      }, [setdividerate])
      let rating = new Rating();
    return(
    <Fragment>    
        <div className="note-display" >
          <div className="circle">
            <svg width="150" height="150" className="circle__svg">
              <circle cx={75} cy={75} r={70} className="circle__progress circle__progress--path" />
              <circle cx={75} cy={75} r={70} className="circle__progress circle__progress--fill" style={{"--initialStroke": rating.totaloader()+'%' ,"--transitionDuration":"900ms","strokeDashoffset":"59.6903"}} />
            </svg>
          </div>
          <div className="tagarea"> 
            <div className="percent">
              <span className="percent__int">{rating.totalRating()}</span>
              <span className="percent__dec"></span>
            </div>
            <span className="label">OUT OF 5</span>
          </div>
         
        </div>
            <div className="">
            <div className="ttl_reviews">
        
          {  Object.keys(dividerate)
             .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
             .map((column) => {
              return ( 
              <div key={column}>
                <div className="group-bar">
               <Row>
               <Col sm="10">
                    { 
                      function(){
                        let row = []
                        for(let i = 0; i < column;  i++ ){
                          row.push(<span key={i}></span>)
                        }
                        return row;
                        }()
                    }    
                </Col>
                <Col sm="2">       
                <span className="total">{dividerate[column]}</span>
                </Col>
                </Row>
              </div>
              </div>)
            })}</div>
            <h5 className="totalpeople">Based On {rating.totalReview()} Users</h5>
        </div>
    </Fragment>
    )
}
export  default RatingCount;   