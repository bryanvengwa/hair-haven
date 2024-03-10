'use client'
import React, {createContext} from 'react'
import { Notification, useToaster, ButtonToolbar, SelectPicker, Button } from 'rsuite';

export const NotificationContext = createContext();




export const NotificationContextProvider = ({children})=>{
    const [type, setType] = React.useState('error');
    const [placement, setPlacement] = React.useState('topStart');
    const toaster = useToaster();
  

    const message = (
        <Notification type={type} header={`${type}!`} closable>
          <p>You have a {type} message, please check it.</p>
          <hr />
          <ButtonToolbar>
            <Button appearance="primary">Ok</Button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
        </Notification>
      );

      
const notify = () => toaster.push(message, { placement })

const contextData={
    message,
    notify,
}

    return(
        <NotificationContext.Provider value={contextData}>
            {children}
        </NotificationContext.Provider>
    )
}