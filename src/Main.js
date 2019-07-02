import React, { Component } from "react";
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import moviepopular from "./app/moviepopular";
import moviedetail from "./app/moviedetail";
import discovertv from "./app/discovertv";
import search from "./app/search";

class Main extends Component {
    constructor() {
        super();
        Main.handleSubmit = Main.handleSubmit.bind(this);
    }

    static handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        window.location = '/movie/search/'+data.get('search');
        // browserHistory.push(`/movie/search/${data.get('search')}`, null);
    }

    render() {
        return <Router>
            <div>
                <Navbar style={{"marginBottom": 20}} bg="light" expand="lg">
                    <Navbar.Brand href="#home">Movie DB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/movie/popular">Popular Movie</Nav.Link>
                            <Nav.Link href="/tv/discover">Discover TV</Nav.Link>
                        </Nav>
                        <Form inline onSubmit={Main.handleSubmit}>
                            <FormControl required="required" name="search" id="search" type="text" placeholder="Search" className="mr-sm-2"/>
                            <Button variant="outline-success" type="submit">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Route exact path="/" component={() => <Redirect to="/movie/popular"/>}/>
                <Route path="/movie/popular" component={moviepopular}/>
                <Route path="/movie/detail/:id" component={moviedetail}/>
                <Route path="/movie/search/:search" component={search}/>
                <Route path="/tv/discover" component={discovertv}/>
            </div>
        </Router>
    }
}

export default Main;