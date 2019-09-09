import React, { useContext } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import MasterStore from '../../../app/stores/masterStore';
import { observer } from 'mobx-react-lite';

const MasterDetails: React.FC = () => { 
    const masterStore = useContext(MasterStore);
    const {selectedMaster: master, openEditForm, cancelSelectedMaster} = masterStore;
    return (
        <Card fluid>
            <Image src={master!.photo} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{master!.fullName}</Card.Header>
                <Card.Meta><span>{master!.birthPlace}</span></Card.Meta>
                <Card.Description>
                    {master!.bio}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={cancelSelectedMaster} basic color='grey' content='Cancel'></Button>
                    <Button onClick={() => openEditForm(master!.id)} basic color='blue' content='Edit'></Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default observer(MasterDetails);