import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CustomHeader = ({ label }) => {
  return (
    <div>
      <span>{label.slice(3)}</span>
    </div>
  );
};

const MyCalendar = props => {
  const events = [
    {
      start: moment().toDate(),
      end: moment().add(5, 'hours').toDate(),
      title: 'Some title',
    },
    {
      start: moment().add(1, 'days').toDate(),
      end: moment().add(1, 'days').add(5, 'hours').toDate(),
      title: 'Some other title',
    }
  ];

  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultView="week"
        views={['week']}
        events={events}
        style={{ height: "100vh" }}
        toolbar={false}
        components={{
          header: CustomHeader,
        }}
        resizable
        selectable
      />
    </div>
  );
}

export default MyCalendar;
