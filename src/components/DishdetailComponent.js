import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import {DISHES} from '../shared/dishes';


class DishDetail extends Component{
    renderDish(dish){
        console.log(dish);
        if(dish!==null){
            return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        
            );
         
        }else{
            return(
            <div></div>
            );
        }
    }
renderComment(comment){
    
        return comment.map(comment => {
        return (
            
                <li key={comment.id} >
                    <p>{comment.comment}</p>
                    <br /><br />
                    -- {comment.author},{new Intl.DateTimeFormat('en-US',{year:'numeric',month: 'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                    <br /><br />
                </li>
            
        );
        
    });
}

  renderComments(comments){
  if(comments){
    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
               {this.renderComment(comments)}
            </ul>
            
        </div>
    );
        
        }else{
            return(
            <div></div>
            );

        }
    }
     render(){
        if(this.props.dish!==null){
        return(
            <div class="container">
           <div className="row">
                 <div className ="col-12 col-md-5 m-1">
                     {this.renderDish(this.props.dish)}
                 </div>
                 <div className ="col-12 col-md-5 m-1">
                     {this.renderComments(this.props.dish.comments)}
                 </div>
           </div>
           </div>
       
        
        );
         }else{
             return(
            <div></div>
             )
        }
    
    }
}
export default DishDetail;
