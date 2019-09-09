import React from 'react';
import { Grid } from 'semantic-ui-react';
import MasterList from './MasterList';
import { IMaster } from '../../../app/models/master';
import MasterDetails from '../details/MasterDetails';
import MasterForm from '../form/MasterForm';

interface IProps {
    masters: IMaster[],
    selectMaster: (id: number) => void;
    selectedMaster: IMaster | null;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedMaster: (master: IMaster | null) => void;
    createMaster: (master: IMaster) => void;
    editMaster: (master: IMaster) => void;
    deleteMaster: (id: number) => void;
}

const MasterDashboard: React.FC<IProps> = ({
    masters, 
    selectMaster, 
    selectedMaster,
    editMode,
    setEditMode,
    setSelectedMaster,
    createMaster,
    editMaster,
    deleteMaster
}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <MasterList masters={masters} selectMaster={selectMaster} deleteMaster={deleteMaster} />
            </Grid.Column>
            <Grid.Column width={6}>
                { selectedMaster && !editMode && (
                    <MasterDetails 
                    master={selectedMaster} 
                    setEditMode={setEditMode} 
                    setSelectedMaster={setSelectedMaster} />
                )}  
                { editMode && (
                    <MasterForm 
                        key={(selectedMaster && selectedMaster.id) || 0} 
                        master={selectedMaster!} 
                        setEditMode={setEditMode}
                        createMaster={createMaster} 
                        editMaster={editMaster}
                    />
                 )}
            </Grid.Column>
        </Grid>
    )
}

export default MasterDashboard;
