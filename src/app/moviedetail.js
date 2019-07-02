import React from 'react';
import axios from 'axios';
import {Card} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let imageUrl = 'http://image.tmdb.org/t/p/w185/';

class moviedetail extends React.Component {
    state = {
        "movieDetail": []
    };
    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=16849afe437df1320762750a5efc0fc0&language=en-US`)
            .then(res => {
                this.setState({ "title": res.data.title, "overview": res.data.overview, "poster_path": res.data.poster_path, "release_date": res.data.release_date, "vote_average": res.data.vote_average });
            });
    }

    render() {
        return this.rendered();
    }

    rendered(){
        const { title, overview, poster_path, release_date, vote_average} = this.state;
        return (
            <div className="container">
                <div className="col-sm-12">
                    <h4 style={{"marginBottom": 50}}>{title}</h4>
                        <Card  style={{ "marginBottom":20 , "width": '100%' }}>
                            <Container>
                                <Row>
                                    <Col sm={3}><Card.Img variant="top" style={{ "paddingTop": 20, "width": '200px' }} src={imageUrl+poster_path} /></Col>
                                    <Col sm={9}><Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Text> {overview}
                                        </Card.Text>
                                    </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>Vote Rate: {vote_average}</ListGroupItem>
                                            <ListGroupItem>Release Date: {release_date}</ListGroupItem>
                                        </ListGroup>
                                        </Col>
                                </Row>
                            </Container>
                        </Card>
                </div>
            </div>
        )
    }
}


export default moviedetail