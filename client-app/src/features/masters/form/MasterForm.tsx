import React, { useState, FormEvent, useContext } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import './MasterForm.css';
import { IMaster } from '../../../app/models/master';
import MasterStore from '../../../app/stores/masterStore';
import { observer } from 'mobx-react-lite';

interface IProps {
    master: IMaster;
}

const MasterForm: React.FC<IProps> = ({
    master: initialFormState,

}) => {
    const masterStore = useContext(MasterStore);
    const {createMaster, editMaster, submitting, cancelFormOpen} = masterStore;
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState;
        }
        else 
        {
            return {
                id: -1,
                firstName: '',
                lastName: '', 
                fullName: '',
                birthPlace: '',
                birthDate: '',
                birthDateFormatted: '',
                deathDate: '',
                deathDateFormatted: '',
                bio: '',
                photo: '',
                isActive: true ,
                createDate: ''
            }
        }
    }

    const [master, setMaster] = useState<IMaster>(initializeForm);

    const handleSubmit = () => {
        if (master.id < 0 || master.id === null) {
            let newMaster = {
                ...master
            }
            createMaster(newMaster);
        }   
        else 
        {
           editMaster(master);     
        }
    }

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.currentTarget;
        master.fullName = master.firstName + ' ' + master.lastName;
        setMaster({ ...master, [name]: value });
    }

    return (
        <Segment>
            <Form id="masterForm" onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange} name="firstName" placeholder='First Name' value={master.firstName} />
                <Form.Input onChange={handleInputChange} name="lastName" placeholder='Last Name' value={master.lastName} />
                <Form.Input onChange={handleInputChange} name="birthPlace" placeholder='Birth Place' value={master.birthPlace} />
                <Form.Input onChange={handleInputChange} type="datetime-local" name="birthDate" placeholder='Birth Date' value={master.birthDate} />
                <Form.Input onChange={handleInputChange} type="datetime-local" name="deathDate" placeholder='Date of Death' value={master.deathDate} />
                <Form.TextArea rows={4} onChange={handleInputChange} name="bio" placeholder='Bio' value={master.bio} />
                <Form.Input onChange={handleInputChange} name="photo" placeholder='Photo' value={master.photo} />
                {/* <Form.Checkbox label='Is Active?' value={master.isActive} /> */}
                <Button.Group widths={2}>
                    <Button onClick={cancelFormOpen}  basic color='grey' content='Cancel' type="button"></Button>
                    <Button loading={submitting} basic color='blue' content='Submit' type="submit"></Button>
                </Button.Group>
            </Form>
        </Segment>
    )
}

export default observer(MasterForm);
