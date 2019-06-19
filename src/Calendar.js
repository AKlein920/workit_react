import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(Calendar);

const WorkoutCalendar = props => (
    <div style={{ height: '500px'}}>
        <DragAndDropCalendar
            localizer={localizer}
            events={[{title: 'Test', start: new Date(), end: new Date(), allDay: false, resource: null}]}
            selectable
            resizeable
        />
    </div>
)

export default WorkoutCalendar;