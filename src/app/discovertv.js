import React from 'react';
import axios from 'axios';
import {Button, Card} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let imageUrl = 'http://image.tmdb.org/t/p/w185/';
class discovertv extends React.Component {
    state = {
        "moviePopular": []
    };
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=16849afe437df1320762750a5efc0fc0&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`)
            .then(res => {
                const moviePopular = res.data.results.map(obj => ({title: obj.title, overview: obj.overview, vote_average: obj.vote_average, release_date: obj.release_date, poster_path: obj.poster_path, id: obj.id}));
                this.setState({ moviePopular });
            });
    }

    render() {
        return this.rendered();
    }

    rendered(){
        return (
            <div className="container">
                <div className="col-sm-12">
                    <h4 style={{marginBottom: 50}}>Discover TV</h4>
                    {this.state.moviePopular.map((moviePopular, i) => (
                        <Card key={moviePopular.id} style={{ marginBottom:20 , width: '100%' }}>
                            <Container>
                                <Row>
                                    <Col sm={3}><Card.Img variant="top" style={{ paddingTop: 20, width: '200px' }} src={imageUrl+moviePopular.poster_path} /></Col>
                                    <Col sm={9}><Card.Body>
                                        <Card.Title>{moviePopular.title}</Card.Title>
                                        <Card.Text>
                                            {moviePopular.overview}
                                        </Card.Text>
                                    </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>Vote Rate: {moviePopular.vote_average}</ListGroupItem>
                                            <ListGroupItem>Release Date: {moviePopular.release_date}</ListGroupItem>
                                        </ListGroup>
                                        <Card.Body>
                                            <Button variant="primary" href={`http://localhost:3000/movie/detail/${moviePopular.id}`} >Detail</Button>
                                        </Card.Body></Col>
                                </Row>
                            </Container>


                        </Card>
                    ))}
                </div>
            </div>
        )
    }
}


export default discovertv