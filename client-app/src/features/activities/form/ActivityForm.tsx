import React, {FormEvent, useContext, useState} from 'react'
import {Button, Form, Segment} from 'semantic-ui-react'
import {IActivity} from "../../../app/models/activity";
import {v4 as uuid} from "uuid";
import ActivityStore from "../../../app/stores/activityStore";
// import {act} from "react-dom/test-utils";
import {observer} from "mobx-react-lite";

interface IProps {
    activity: IActivity;
}

const ActivityForm: React.FC<IProps> = ({activity: initialFormState}) => {
    const activityStore = useContext(ActivityStore);
    const {createActivity, editActivity, submitting, cancelFormOpen} = activityStore;
    const initializeForm = () => {
        if(initialFormState)
            return initialFormState;
        else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: '',
            }
        }
    };

    const [activity, setActivity] = useState<IActivity>(initializeForm);
    
    const handleSubmit = () => {
        if(activity.id.length ===0) {
            let newActivity = {
                ...activity,
                id: uuid()
            }
            createActivity(newActivity);
        }else {
            editActivity(activity);
        }
    }
    
    const handlerInputChange = (event:  FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setActivity({...activity, [name]: value})
    }
    
    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder='Title' name='title' onChange={handlerInputChange} value={activity.title}/>
                <Form.TextArea rows={2} name='description' onChange={handlerInputChange} placeholder='Description' value={activity.description}/>
                <Form.Input name='category' onChange={handlerInputChange} placeholder='Category' value={activity.category}/>
                <Form.Input name='date' onChange={handlerInputChange} type='datetime-local' placeholder='Date' value={activity.date}/>
                <Form.Input name='city' onChange={handlerInputChange} placeholder='City' value={activity.city}/>
                <Form.Input name='venue' onChange={handlerInputChange} placeholder='Venue' value={activity.venue}/>
                <Button loading={submitting} floated='right' positive type='submit' content='Submit'/>
                <Button onClick={cancelFormOpen} floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    );
}

export default observer(ActivityForm)