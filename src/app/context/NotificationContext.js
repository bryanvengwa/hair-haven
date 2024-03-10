'use client'
import React, {createContext} from 'react'
import { Notification, useToaster, ButtonToolbar, SelectPicker, Button } from 'rsuite';

export const NotificationContext = createContext();




export const NotificationContextProvider = ({children})=>{
    const [type, setType] = React.useState('info');
    const [placement, setPlacement] = React.useState('topStart');
    const toaster = useToaster();
  


    const message = ( text, infoType='info')=>{
        return(
            <Notification type={infoType ? infoType : 'info'} header={`${infoType}!`} closable>
            <p> {text} </p>
            <br/>
            <br/>
            <hr />
     
          </Notification>
        )
    }

      
const notify = (text, infoType) => toaster.push(message(text, infoType), { placement })

const contextData={
    // message,
    notify,
}

    return(
        <NotificationContext.Provider value={contextData}>
            {children}
        </NotificationContext.Provider>
    )
}