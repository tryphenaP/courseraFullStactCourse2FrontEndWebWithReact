import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';





    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-12 col-md-5 m-1">
                        <Card className='p-2'>
                            <h4>Comments</h4>
                            {dish.comments.map(comment1 => {
                                return (

                                    <div key={comment1.id}>
                                        <ul className='list-unstyled'>
                                            <li>{comment1.comment}</li>
                                            <li>-- {comment1.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment1.date)))}</li>
                                        </ul>
                                    </div>
                                );
                            })}

                        </Card>
                    </div>
                </>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {

        
        return (
            <div className="container">
                <div className='row'>
                    <RenderDish dish = {props.dish}/>
                </div>
            </div>
        )
    }


export default DishDetail;