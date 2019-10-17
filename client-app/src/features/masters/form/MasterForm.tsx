import React, { useState, /*FormEvent,*/ useContext, useEffect } from 'react';
import { Segment, Form, Button, Grid } from 'semantic-ui-react';
import './MasterForm.css';
import { MasterFormValues } from '../../../app/models/master';
import MasterStore from '../../../app/stores/masterStore';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { Form as FinalForm, Field } from 'react-final-form';
import TextInput from '../../../app/common/form/TextInput';
import TextAreaInput from '../../../app/common/form/TextAreaInput';
import DateInput from '../../../app/common/form/DateInput';
// import { category } from '../../../app/common/options/categoryOptions';
// import SelectInput from '../../../app/common/form/SelectInput';

interface DetailParams {
    id: string;
}

const MasterForm: React.FC<RouteComponentProps<DetailParams>> = ({
    match,
    history
}) => {
    const masterStore = useContext(MasterStore);
    const {
      //  createMaster, 
    //    editMaster, 
        submitting, 
        loadMaster
    } = masterStore;

    const [master, setMaster] = useState(new MasterFormValues());
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (match.params.id) {
          setLoading(true);
          loadMaster(match.params.id)
            .then(master => {
              setMaster(new MasterFormValues(master));
            })
            .finally(() => setLoading(false));
        }
      }, [loadMaster, match.params.id]);
    

    // const handleSubmit = () => {
    //     if (master.id.length === 0) {
    //       let newMaster = {
    //         ...master
    //       };
    //       createMaster(newMaster).then(() => history.push(`/masters/${newMaster.id}`))
    //     } else {
    //       editMaster(master).then(() => history.push(`/masters/${master.id}`));
    //     }
    // };

    const handleFinalFormSubmit = (values: any) => {
        console.log( values );
    }

    // const handleInputChange = (
    //     event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
    // ) => {
    //     const { name, value } = event.currentTarget;
    //     setMaster({ ...master, [name]: value });
    // };

    return (
        <Grid>
            <Grid.Column width={10}>
                <Segment clearing>
                    <FinalForm 
                        onSubmit={handleFinalFormSubmit} 
                        initialValues={master}
                        render={({handleSubmit, invalid, pristine}) => (
                            <Form onSubmit={handleSubmit} loading={loading}>
                                <Field
                                    name="firstName" 
                                    placeholder='First Name' 
                                    value={master.firstName} 
                                    component={TextInput}
                                />
                                <Field
                                    name="lastName" 
                                    placeholder='Last Name' 
                                    value={master.lastName} 
                                    component={TextInput}
                                />
                                <Field
                                    name="birthPlace" 
                                    placeholder='Birth Place' 
                                    value={master.birthPlace}
                                    component={TextInput} 
                                />
                                <Field
                                    name="birthDate" 
                                    placeholder='Birth Date' 
                                    value={master.birthDate}
                                    date={true}
                                    component={DateInput} 
                                />
                                <Field
                                    name="deathDate" 
                                    placeholder='Date of Death' 
                                    value={master.deathDate}
                                    date={true}
                                    component={DateInput} 
                                />
                                <Field
                                    rows={4} 
                                    name="bio" 
                                    placeholder='Bio' 
                                    value={master.bio} 
                                    component={TextAreaInput}
                                />
                                <Field
                                    name="photo" 
                                    placeholder='Photo' 
                                    value={master.photo}
                                    component={TextInput}
                                />
                                {/* <Field
                                    options={category}
                                    name='category'
                                    placeholder='Category'
                                    value={master.category}
                                    component={SelectInput}
                                /> */}
                                <Button.Group widths={2}>
                                    <Button 
                                        onClick={
                                            master.id
                                              ? () => history.push(`/masters/${master.id}`)
                                              : () => history.push('/masters')
                                        }
                                        disabled={loading}
                                        basic 
                                        color='grey' 
                                        content='Cancel' 
                                        type="button"
                                    />
                                    <Button 
                                        loading={submitting} 
                                        disabled={loading || invalid || pristine}
                                        basic 
                                        color='blue' 
                                        content='Submit' 
                                        type="submit"
                                    />
                                </Button.Group>
                            </Form>
                        )}
                    />
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default observer(MasterForm);
