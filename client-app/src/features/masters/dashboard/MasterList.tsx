import React, { Fragment, useContext } from 'react';
import { Card } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import MasterStore from '../../../app/stores/masterStore';
import MasterListItem from './MasterListItem';

const MasterList: React.FC = () => {
    const masterStore = useContext(MasterStore);
    const {mastersById} = masterStore;
    return (
        <Fragment>
            <Card.Group>
                {mastersById.map((master) => ( 
                    <MasterListItem key={master.id} master={master} />
                ))}
            </Card.Group>
        </Fragment>
    );
};

export default observer(MasterList);
