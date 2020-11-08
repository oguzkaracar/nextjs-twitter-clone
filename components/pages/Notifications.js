import React from 'react';

import NotificationTitle from '../titles/notifications';
import NotificationItem from '../notification-item';

const NotificationsMain = () => {
  return (
    <div>
      <NotificationTitle />
      <NotificationItem name="Twitter User" tweet="test-Tweet" />
      <NotificationItem name="Twitter User" tweet="test-Tweet" />
      <NotificationItem name="Twitter User" tweet="test-Tweet" />
      <NotificationItem name="Twitter User" tweet="test-Tweet" />
      <NotificationItem name="Twitter User" tweet="test-Tweet" />
      <NotificationItem name="Twitter User" tweet="test-Tweet" />
    </div>
  );
};

export default NotificationsMain;
