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
                    events={[
                        { title: 'Buy BABA Shares', date: '2022-01-22' },
                        { title: 'Sell BABA Shares', date: '2022-01-29', backgroundColor: '#ff5555', borderColor: '#ff5555' }
                    ]}
                    contentHeight={dHeight}
                />
            </div>
        );
    }

}

export default CalendarPage;