import React, { useState, FormEvent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import './MasterForm.css';
import { IMaster } from '../../../app/models/master';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    master: IMaster;
    createMaster: (master: IMaster) => void;
    editMaster: (master: IMaster) => void;
}

const MasterForm: React.FC<IProps> = ({
    setEditMode, 
    master: 
    initialFormState,
    createMaster,
    editMaster
}) => {
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
                isActive: ''
            }
        }
    }

    const [master, setMaster] = useState<IMaster>(initializeForm);

    const handleSubmit = () => {
        if (master.id < 1) {
            let newMaster = {
                ...master,
                id: -1
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

        setMaster({
            ...master,
            [name]: value
        })
    }

    return (
        <Segment>
            <Form id="masterForm" onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange} name="firstName" placeholder='First Name' value={master.firstName} />
                <Form.Input onChange={handleInputChange} name="lastName" placeholder='Last Name' value={master.lastName} />
                <Form.Input onChange={handleInputChange} name="birthPlace" placeholder='Birth Place' value={master.birthPlace} />
                <Form.Input onChange={handleInputChange} name="birthDate" placeholder='Birth Date' value={master.birthDate} />
                <Form.Input onChange={handleInputChange} name="deathDate" placeholder='Date of Death' value={master.deathDate} />
                <Form.TextArea rows={4} onChange={handleInputChange} name="bio" placeholder='Bio' value={master.bio} />
                <Form.Input onChange={handleInputChange} name="photo" placeholder='Photo' value={master.photo} />
                {/* <Form.Checkbox label='Is Active?' value={master.isActive} /> */}
                <Button.Group widths={2}>
                    <Button onClick={() => setEditMode(false)}  basic color='grey' content='Cancel' type="button"></Button>
                    <Button basic color='blue' content='Submit' type="submit"></Button>
                </Button.Group>
            </Form>
        </Segment>
    )
}

export default MasterForm;
