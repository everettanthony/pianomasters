import React, { Fragment } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { IMaster } from '../../../app/models/master';

interface IProps {
    masters: IMaster[],
    selectMaster: (id: number) => void;
    deleteMaster: (id: number) => void;
}

const MasterList: React.FC<IProps> = ({masters, selectMaster, deleteMaster}) => {
    return (
        <Fragment>
            <Card.Group>
                { masters.map((master) => (
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
                                    onClick={() => selectMaster(master.id)} 
                                    floated='right' 
                                    content='View' 
                                    color='blue' />
                                <Button 
                                    onClick={() => deleteMaster(master.id)} 
                                    floated='right' 
                                    content='Delete' 
                                    color='red' />
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </Fragment>
    )
}

export default MasterList;
