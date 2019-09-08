import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { IMaster } from '../../../app/models/master';

interface IProps {
    master: IMaster,
    setEditMode: (editMode: boolean) => void;
    setSelectedMaster: (master: IMaster | null) => void;
}

const MasterDetails: React.FC<IProps> = ({master, setEditMode, setSelectedMaster}) => {
    window.scrollTo(0, 0);
    
    return (
        <Card fluid>
            <Image src={master.photo} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{master.fullName}</Card.Header>
                <Card.Meta><span>{master.birthPlace}</span></Card.Meta>
                <Card.Description>
                    {master.bio}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={() => setSelectedMaster(null)}  basic color='grey' content='Cancel'></Button>
                    <Button onClick={() => setEditMode(true)} basic color='blue' content='Edit'></Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default MasterDetails;