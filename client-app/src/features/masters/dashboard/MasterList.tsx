import React, { Fragment, useContext } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import MasterStore from '../../../app/stores/masterStore';

const MasterList: React.FC = () => {
    const masterStore = useContext(MasterStore);
    const {mastersById, selectMaster, deleteMaster, submitting, target} = masterStore;
    return (
        <Fragment>
            <Card.Group>
                {mastersById.map((master) => ( 
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

export default observer(MasterList);
