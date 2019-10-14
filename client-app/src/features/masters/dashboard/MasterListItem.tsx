import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { IMaster } from '../../../app/models/master';

const MasterListItem: React.FC<{master: IMaster}> = ({master}) => {
    return (
        <Card key={master.id} style={{width:'100%'}}>
            <Card.Content>
                <Card.Header as='a'>{master.fullName}</Card.Header>
                <Card.Meta>{master.birthPlace}</Card.Meta>
                <Card.Description>
                    <div>{master.bio}</div>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button 
                    as={Link} to={`/masters/${master.id}`}
                    floated='right' 
                    content='View' 
                    color='blue' />
            </Card.Content>
        </Card>
    );
};

export default MasterListItem;
