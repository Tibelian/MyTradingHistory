import React from 'react';

class CalendarPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
    }

    componentDidMount() {
        this.props.handleCurrentPage('Calendar');
    }

    render() {
        return (
            <div>
                NOTHING HERE...
            </div>
        );
    }

}

export default CalendarPage;