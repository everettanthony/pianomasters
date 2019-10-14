import React, { useState, FormEvent, useContext, useEffect } from 'react';
import { Segment, Form, Button, Grid } from 'semantic-ui-react';
import './MasterForm.css';
import { IMaster } from '../../../app/models/master';
import MasterStore from '../../../app/stores/masterStore';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';

interface DetailParams {
    id: any;
}

const MasterForm: React.FC<RouteComponentProps<DetailParams>> = ({
    match,
    history
}) => {
    const masterStore = useContext(MasterStore);
    const {
        createMaster, 
        editMaster, 
        submitting, 
        master: initialFormState,
        loadMaster,
        clearMaster
    } = masterStore;

    const [master, setMaster] = useState<IMaster>({
        id: -1,
        firstName: '',
        lastName: '', 
        birthPlace: '',
        birthDate: '',
        deathDate: '',
        bio: '',
        photo: ''
    });

    useEffect(() => {
        if (match.params.id && master.id < 0) {
          loadMaster(match.params.id).then(
            () => initialFormState && setMaster(initialFormState)
          );
        }
        return () => {
          clearMaster()
        }
      }, [loadMaster, clearMaster, match.params.id, initialFormState, master.id]);

    const handleSubmit = () => {
        if (master.id < 0) {
          let newMaster = {
            ...master
          };
          createMaster(newMaster).then(() => history.push(`/masters/${newMaster.id}`))
        } else {
          editMaster(master).then(() => history.push(`/masters/${master.id}`));
        }
      };

    const handleInputChange = (
        event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.currentTarget;
        setMaster({ ...master, [name]: value });
    };

    return (
        <Grid>
            <Grid.Column width={10}>
                <Segment clearing>
                    <Form id="masterForm" onSubmit={handleSubmit}>
                        <Form.Input 
                            onChange={handleInputChange} 
                            name="firstName" 
                            placeholder='First Name' 
                            value={master.firstName} 
                        />
                        <Form.Input 
                            onChange={handleInputChange} 
                            name="lastName" 
                            placeholder='Last Name' 
                            value={master.lastName} 
                        />
                        <Form.Input 
                            onChange={handleInputChange} 
                            name="birthPlace" 
                            placeholder='Birth Place' 
                            value={master.birthPlace} 
                        />
                        <Form.Input 
                            onChange={handleInputChange} 
                            type="datetime-local" 
                            name="birthDate" 
                            placeholder='Birth Date' 
                            value={master.birthDate} 
                        />
                        <Form.Input 
                            onChange={handleInputChange} 
                            type="datetime-local" 
                            name="deathDate" 
                            placeholder='Date of Death' 
                            value={master.deathDate} 
                        />
                        <Form.TextArea 
                            rows={4} 
                            onChange={handleInputChange} 
                            name="bio" 
                            placeholder='Bio' 
                            value={master.bio} 
                        />
                        <Form.Input 
                            onChange={handleInputChange} 
                            name="photo" 
                            placeholder='Photo' 
                            value={master.photo} 
                        />
                        <Button.Group widths={2}>
                            <Button 
                                onClick={() => history.push('/masters')} 
                                basic 
                                color='grey' 
                                content='Cancel' 
                                type="button"
                            />
                            <Button 
                                loading={submitting} 
                                basic 
                                color='blue' 
                                content='Submit' 
                                type="submit"
                            />
                        </Button.Group>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default observer(MasterForm);
