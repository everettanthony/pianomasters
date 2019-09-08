import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { IMaster } from '../models/master';
import NavBar from '../../features/nav/NavBar';
import MasterDashboard from '../../features/masters/dashboard/MasterDashboard';

const App = () => {
  const [masters, setMasters] = useState<IMaster[]>([]);
  const [selectedMaster, setSelectedMaster] = useState<IMaster | null>(null);

  const [editMode, setEditMode] = useState(false);

  const handleSelectMaster = (id: number) => {
    setSelectedMaster(masters.filter(m => m.id === id)[0]);
  }

  const handleOpenCreateForm = () => {
    setSelectedMaster(null);
    setEditMode(true);
  }

  const handleCreateMaster = (master: IMaster) => {
    setMasters([...masters, master]);
    setSelectedMaster(master);
    setEditMode(false);
  }

  const handleEditMaster = (master: IMaster) => {
    setMasters([...masters.filter(m => m.id !== master.id), master]);
    setSelectedMaster(master);
    setEditMode(false);
  }

  useEffect(() => {
    axios.get<IMaster[]>('http://localhost:5000/api/masters')
      .then((rsp) => {
        setMasters(rsp.data)
      });
  }, []);

  return (
    <Fragment>
      <Container fluid>
        <NavBar openCreateForm={handleOpenCreateForm} />
        <Container style={{marginTop:'6em'}}>
        <MasterDashboard 
          masters={masters} 
          selectMaster={handleSelectMaster} 
          selectedMaster={selectedMaster} 
          editMode={editMode} 
          setEditMode={setEditMode} 
          setSelectedMaster={setSelectedMaster}
          createMaster={handleCreateMaster} 
          editMaster={handleEditMaster} />
        </Container>
      </Container>
    </Fragment>
  );
}

export default App;
