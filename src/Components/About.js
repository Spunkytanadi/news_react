import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

function About () {
    return (
        <div className="aboutPage">
            <div className="aboutHeader">
                <h1>Spunky the Adorable Dog</h1>
            </div>
            <Container>
                <Card border="info" >
                    <Card.Header className="blockquote mb-0 card-body">About Us</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Spunky was born in South Carolina in 2020
                    </Card.Text>
                    <Card.Text>
                        Her favorite thing to do is running at the dog park chasing herself and her friends.
                    </Card.Text>
                    <Card.Text>
                        Her favorite treat is frozen bone marrow.
                    </Card.Text>
                </Card.Body>
                        <Card.Img style={{ width: '50%', margin: '0 auto'}}  variant="bottom" src="./public/Spunky_Tanadi.jpg" />
                    </Card>
                </Container>
        </div>
    );
}

export default About;