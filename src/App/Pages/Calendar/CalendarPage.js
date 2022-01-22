import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

class CalendarPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
    }

    componentDidMount() {
        this.props.handleCurrentPage('Calendar');
    }

    render() {

        let dHeight = 700;
        if (window.innerWidth < 768) dHeight = 500;

        return (
            <div className="col-12 bg-white shadow-sm p-3 mth_calendar">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    eventClassNames="mth_calendar-event"
                    events={[
                        { title: 'Buy 4 BABA (-857.84 USD)', date: '2022-01-22', backgroundColor: '#ff5555', borderColor: '#ff5555' },
                        { title: 'Sell 4 BABA (+868.00 USD)', date: '2022-01-29', backgroundColor: '#005555', borderColor: '#005555' }
                    ]}
                    contentHeight={dHeight}
                />
            </div>
        );
    }

}

export default CalendarPage;