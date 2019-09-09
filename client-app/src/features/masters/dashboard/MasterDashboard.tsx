import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import MasterList from './MasterList';
import MasterDetails from '../details/MasterDetails';
import MasterForm from '../form/MasterForm';
import { observer } from 'mobx-react-lite';
import MasterStore from '../../../app/stores/masterStore';

const MasterDashboard: React.FC = () => {
    const masterStore = useContext(MasterStore);
    const {editMode, selectedMaster} = masterStore;
    return (
        <Grid>
            <Grid.Column width={10}>
                <MasterList />
            </Grid.Column>
            <Grid.Column width={6}>
                { selectedMaster && !editMode && (
                    <MasterDetails />
                )}  
                {editMode && (
                    <MasterForm 
                        key={(selectedMaster && selectedMaster.id) || 0} 
                        master={selectedMaster!} 
                    />
                 )}
            </Grid.Column>
        </Grid>
    )
}

export default observer(MasterDashboard);
