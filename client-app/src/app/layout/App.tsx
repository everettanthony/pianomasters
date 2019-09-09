import React, { useState, useEffect, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { IMaster } from '../models/master';
import NavBar from '../../features/nav/NavBar';
import MasterDashboard from '../../features/masters/dashboard/MasterDashboard';
import agent from '../api/agent';

const App = () => {
  const [masters, setMasters] = useState<IMaster[]>([]);
  const [selectedMaster, setSelectedMaster] = useState<IMaster | null>(null);

  const [editMode, setEditMode] = useState(false);

  const handleSelectMaster = (id: number) => {
    setSelectedMaster(masters.filter(m => m.id === id)[0]);
    setEditMode(false);
  }

  const handleOpenCreateForm = () => {
    setSelectedMaster(null);
    setEditMode(true);
  }

  const handleCreateMaster = (master: IMaster) => {
    console.log('Created master: ', master);
    agent.Masters.create(master).then(() => {
      setMasters([...masters, master]);
      setSelectedMaster(master);
      setEditMode(false);
    });
  }

  const handleEditMaster = (master: IMaster) => {
    setMasters([...masters.filter(m => m.id !== master.id), master]);
    setSelectedMaster(master);
    setEditMode(false);
  }

  const handleDeleteMaster = (id: number) => {
    setMasters([...masters.filter(m => m.id !== id)])
  }

  useEffect(() => {
    agent.Masters.list()
      .then((response) => {
        let masters: IMaster[] = [];
        response.forEach(master => {
          master.birthDate = master.birthDate.split('.')[0];
          masters.push(master);
        });

        setMasters(response)
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
          editMaster={handleEditMaster} 
          deleteMaster={handleDeleteMaster} />
        </Container>
      </Container>
    </Fragment>
  );
}

export default App;
