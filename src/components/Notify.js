'use client'
import React from 'react'
import { Notification, useToaster, ButtonToolbar, SelectPicker, Button } from 'rsuite';

const Notify = () => {
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

  return (
    <div>
      <hr />
      <ButtonToolbar>
        
        <Button onClick={() => toaster.push(message, { placement })} >
          Push
        </Button>
        {/* <Button onClick={() => toaster.remove()}>Remove</Button>
        <Button onClick={() => toaster.clear()}>Clear</Button> */}
      </ButtonToolbar>
    </div>
  );
};

export default Notify;