import React, { useMemo } from 'react';
import {
 RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';

// Define the context with the openNotification function
export const NotificationContext = React.createContext({
 openNotification: () => {},
});

const Notification = () => {
 const [api, contextHolder] = notification.useNotification();

 const openNotification = (placement, message) => {
    api.info({
      message: `Notification ${placement}`,
      description: <NotificationContext.Consumer>{({ name }) => `${message}, ${name}!`}</NotificationContext.Consumer>,
      placement,
    });
 };

 const contextValue = useMemo(
    () => ({
      name: 'Ant Design',
      openNotification, // Include the function in the context value
    }),
    [],
 );

 return (
    <NotificationContext.Provider value={contextValue}>
      {contextHolder}
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('topRight', 'This is a custom message')}
          icon={<RadiusUprightOutlined />}
        >
          topRight
        </Button>
      </Space>
      <Divider />
      {/* Render the child component here */}
      <ChildComponent />
    </NotificationContext.Provider>
 );
};

export default Notification;
