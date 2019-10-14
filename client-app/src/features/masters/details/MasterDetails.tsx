import React, { useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import MasterStore from '../../../app/stores/masterStore';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import LoaderComponent from '../../../app/layout/loader/LoaderComponent';
import MasterDetailedHeader from './MasterDetailedHeader';
import MasterDetailedInfo from './MasterDetailedInfo';
import MasterDetailedChat from './MasterDetailedChat';
import MasterDetailedSidebar from './MasterDetailedSidebar';

interface DetailParams {
    id: any
}

const MasterDetails: React.FC<RouteComponentProps<DetailParams>> = ({
    match, 
    history
}) => { 
    const masterStore = useContext(MasterStore);
    const {
        master, 
        loadMaster, 
        loadingInitial
    } = masterStore;

    useEffect(() => {
        loadMaster(match.params.id);
    }, [loadMaster, match.params.id]);

    if (loadingInitial) 
        return <LoaderComponent content='Loading piano master...' />;

    if (!master)
        return <h2>Piano Master not found.</h2>;

    return (
        <Grid>
            <Grid.Column width={10}>
                <MasterDetailedHeader master={master} />
                <MasterDetailedInfo  master={master} />
                <MasterDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <MasterDetailedSidebar />
            </Grid.Column>
        </Grid>
    );
};

export default observer(MasterDetails);