import React from 'react';
import ManageProjects from './ManageProjects';

class Dashboard extends React.Component {
    render() {
        return (

            <div className="container">
                <div className="columns is-mobile is-centered is-multiline">
                    <div className="column is-two-thirds">
                        <ManageProjects />
                    </div>
                </div>
            </div>

        )
    }
}

export default Dashboard;