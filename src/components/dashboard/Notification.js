import React, { Component } from "react";
import moment from "moment";

class Notification extends Component {
  render() {
    const { notifications } = this.props;
    return (
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Notifications</span>
            <ul className="notifications">
              {notifications && notifications.map((notification, idx) => {
                return (
                  <li key={idx}>
                    <span className="pink-text">{notification.user}: </span>
                    <span>{notification.content}</span>
                    <div className="grey-text note-date">
                      {moment(notification.time.toDate()).fromNow()}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Notification;
