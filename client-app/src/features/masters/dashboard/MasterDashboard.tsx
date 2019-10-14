import React, { useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import MasterList from './MasterList';
import { observer } from 'mobx-react-lite';
import MasterStore from '../../../app/stores/masterStore';
import LoaderComponent from '../../../app/layout/loader/LoaderComponent';

const MasterDashboard: React.FC = () => {
    const masterStore = useContext(MasterStore);

    useEffect(() => {
        masterStore.loadMasters();
    }, [masterStore]);  

    if (masterStore.loadingInitial)
        return <LoaderComponent content='Loading piano masters...' />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <MasterList />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Master Filters</h2>
            </Grid.Column>
        </Grid>
    )
}

export default observer(MasterDashboard);
