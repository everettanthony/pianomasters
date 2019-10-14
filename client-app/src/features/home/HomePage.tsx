import React from 'react';
import { Container, Segment, Header, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>Piano Masters</Header>
                <Header as='h2' inverted content='Welcome to Piano Masters' />
                <Button as={Link} to='/masters' size='huge' inverted>
                    Visit the Piano Masters Library
                </Button>
            </Container>
        </Segment>
    );
};

export default HomePage;
