import React, { useEffect, Fragment, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import MasterDashboard from '../../features/masters/dashboard/MasterDashboard';
import LoaderComponent from './loader/LoaderComponent';
import MasterStore from '../stores/masterStore';
import { observer } from 'mobx-react-lite';

const App = () => {
  const masterStore = useContext(MasterStore);

  useEffect(() => {
    masterStore.loadMasters();
  }, [masterStore]);

  if (masterStore.loadingInitial) return <LoaderComponent content='Loading the piano masters...' />

  return (
    <Fragment>
      <Container fluid>
        <NavBar />
        <Container style={{marginTop:'6em'}}>
        <MasterDashboard />
        </Container>
      </Container>
    </Fragment>
  );
}

export default observer(App);
