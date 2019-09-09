import React, { SyntheticEvent } from 'react';
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
    deleteMaster: (e: SyntheticEvent<HTMLButtonElement>, id: number) => void;
    submitting: boolean;
    target: string;
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
    deleteMaster,
    submitting,
    target
}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <MasterList 
                    masters={masters} 
                    selectMaster={selectMaster} 
                    deleteMaster={deleteMaster} 
                    submitting={submitting}
                    target={target}
                />
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
                        submitting={submitting}
                    />
                 )}
            </Grid.Column>
        </Grid>
    )
}

export default MasterDashboard;
