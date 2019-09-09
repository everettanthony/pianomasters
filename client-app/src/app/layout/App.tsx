import React, { useState, useEffect, Fragment, SyntheticEvent } from 'react';
import { Container } from 'semantic-ui-react';
import { IMaster } from '../models/master';
import NavBar from '../../features/nav/NavBar';
import MasterDashboard from '../../features/masters/dashboard/MasterDashboard';
import agent from '../api/agent';
import LoaderComponent from './loader/LoaderComponent';

const App = () => {
  const [masters, setMasters] = useState<IMaster[]>([]);
  const [selectedMaster, setSelectedMaster] = useState<IMaster | null>(null);

  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [target, setTarget] = useState('');

  const handleSelectMaster = (id: number) => {
    setSelectedMaster(masters.filter(m => m.id === id)[0]);
    setEditMode(false);
  }

  const handleOpenCreateForm = () => {
    setSelectedMaster(null);
    setEditMode(true);
  }

  const handleCreateMaster = (master: IMaster) => {
    setSubmitting(true);
    agent.Masters.create(master).then(() => {
      setMasters([...masters, master]);
      setSelectedMaster(master);
      setEditMode(false);
    }).then(() => setSubmitting(false));
  }

  const handleEditMaster = (master: IMaster) => {
    setSubmitting(true);
    agent.Masters.update(master).then(() => {
      setMasters([...masters.filter(m => m.id !== master.id), master]);
      setSelectedMaster(master);
      setEditMode(false);
    }).then(() => setSubmitting(false));
  }

  const handleDeleteMaster = (event: SyntheticEvent<HTMLButtonElement>, id: number) => {
    setSubmitting(true);
    setTarget(event.currentTarget.name);
    agent.Masters.delete(id).then(() => {
      setMasters([...masters.filter(m => m.id !== id)]);
    }).then(() => setSubmitting(false));
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
      }).then(() => setLoading(false));
  }, []);

  if (loading) return <LoaderComponent content='Loading the piano masters...' />

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
          deleteMaster={handleDeleteMaster} 
          submitting={submitting}
          target={target} />
        </Container>
      </Container>
    </Fragment>
  );
}

export default App;
