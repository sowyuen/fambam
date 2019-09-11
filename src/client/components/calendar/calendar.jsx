import React from 'react';
import Calendar from 'react-calendar';

import styles from './style.scss';

class CalendarView extends React.Component {
    constructor() {
        super();
        this.state = {
            shown: false,
        };
    }

    toggle() {
        this.setState({
            shown: !this.state.shown
        });
    }

    render() {
        var shown = {
            display: this.state.shown ? "block" : "none"
        };

        var hidden = {
            display: this.state.shown ? "none" : "block"
        }

        return (
            <div className={`d-flex flex-row-reverse ${styles.calendarWrapper}`}>
                <button className='my-auto ml-3 btn btn-secondary text-center' data-toggle="tooltip" data-placement="left" title="CALENDAR" onClick={this.toggle.bind(this)}>«</button>
                <div style={ shown }>
                    <Calendar/>
                </div>
            </div>
        )
    }
}

export default CalendarView;