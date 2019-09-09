import React, { Fragment, SyntheticEvent } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { IMaster } from '../../../app/models/master';

interface IProps {
    masters: IMaster[],
    selectMaster: (id: number) => void;
    deleteMaster: (e: SyntheticEvent<HTMLButtonElement>, id: number) => void;
    submitting: boolean;
    target: string;
}

const MasterList: React.FC<IProps> = ({
    masters, 
    selectMaster, 
    deleteMaster, 
    submitting,
    target
}) => {
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
                                    name={master.id}
                                    loading={target === master.id.toString() && submitting} 
                                    onClick={(e) => deleteMaster(e, master.id)} 
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
