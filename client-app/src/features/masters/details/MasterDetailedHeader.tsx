import React from 'react';
import { Segment, Item, Header, Button, Image } from 'semantic-ui-react';
import { IMaster } from '../../../app/models/master';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

const masterImageStyle = {
    filter: 'brightness(70%)'
};

const masterImageTextStyle = {
    bottom: '4px',
    color: 'white',
    height: 'auto',
    left: '4px',
    position: 'absolute',
    width: '100%'
};

const MasterDetailedHeader: React.FC<{master: IMaster}> = ({master}) => {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{ padding: '0' }}>
                <Image
                    src={master.photo}
                    fluid
                    style={masterImageStyle}
                />
                <Segment style={masterImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={master.fullName}
                                    style={{ color: 'white' }}
                                />
                                <p>{master.birthDateFormatted}</p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>Join Event</Button>
                <Button>Cancel Attendance</Button>
                <Button as={Link} to={`/manage/${master.id}`} color='orange' floated='right'>Edit Piano Master</Button>
            </Segment>
        </Segment.Group>
    );
}

export default observer(MasterDetailedHeader);
