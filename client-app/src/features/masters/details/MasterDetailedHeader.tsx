import React from 'react';
import { Segment, Item, Header, Button, Image } from 'semantic-ui-react';
import { IMaster } from '../../../app/models/master';
import { observer } from 'mobx-react-lite';

const masterImageStyle = {
    filter: 'brightness(30%)'
};

const masterImageTextStyle = {
    bottom: '5%',
    color: 'white',
    height: 'auto',
    left: '5%',
    position: 'absolute',
    width: '100%'
};

const MasterDetailedHeader: React.FC<{master: IMaster}> = ({master}) => {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{ padding: '0' }}>
                <Image
                    src={`/assets/masters/${master.photo}.jpg`}
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
                                <p>{master.birthDate}</p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>Join Event</Button>
                <Button>Cancel Attendance</Button>
                <Button color='orange' floated='right'>Manage Event</Button>
            </Segment>
        </Segment.Group>
    );
}

export default observer(MasterDetailedHeader);
