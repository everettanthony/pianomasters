import React from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';
import { IMaster } from '../../../app/models/master';

const MasterDetailedInfo:React.FC<{master: IMaster}> = ({master}) => {
    return (
        <Segment.Group>
            <Segment attached='top'>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='info' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{master.bio}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='calendar' size='large' color='teal' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <span>{master.birthDate}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='marker' size='large' color='teal' />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{master.birthPlace}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    );
}

export default MasterDetailedInfo;
