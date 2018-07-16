import React, { Component } from 'react';

class ProgressTracker extends Component {
    render() {
        return (
            <div className="progress-tracker">
                <label className='progress-tracker__label'>Progress Tracker</label>
                <div className='progress-teacker__precentage'>
                    0%
                </div>
            </div>
        )
    }
}

export default ProgressTracker;