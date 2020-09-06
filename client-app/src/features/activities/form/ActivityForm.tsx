import React, {FormEvent, useContext, useEffect, useState} from 'react'
import {Button, Form, Segment} from 'semantic-ui-react'
import {IActivity} from "../../../app/models/activity";
import {v4 as uuid} from "uuid";
import ActivityStore from "../../../app/stores/activityStore";
// import {act} from "react-dom/test-utils";
import {observer} from "mobx-react-lite";
import {RouteComponentProps} from 'react-router';
// import {Simulate} from "react-dom/test-utils";
// import load = Simulate.load;

interface DetailParams {
    id: string;
}

const ActivityForm: React.FC<RouteComponentProps<DetailParams>> = ({match, history}) => {
    const activityStore = useContext(ActivityStore);
    const {createActivity, editActivity, submitting, activity: initialFormState, loadActivity, clearActivity} = activityStore;

    const [activity, setActivity] = useState<IActivity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
    });

    useEffect(() => {
        if ( match.params.id && activity.id.length === 0) {
            loadActivity(match.params.id).then(
                () => initialFormState && setActivity(initialFormState)
            );
        }

        return () => {
            clearActivity()
        }
    }, [loadActivity, match.params.id, initialFormState, clearActivity, activity.id.length]);
    
    const handleSubmit = () => {
        if(activity.id.length ===0) {
            let newActivity = {
                ...activity,
                id: uuid()
            }
            createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`));
        }else {
            editActivity(activity).then(() => history.push(`/activities/${activity.id}`));
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
                <Button onClick={() => history.push('/activities')} floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    );
}

export default observer(ActivityForm)