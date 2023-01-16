import React, { useState } from "react";
import Index from "../Index";

const Notifications = () => {
//#region States
  const [message, setMessage] = useState('');
// #endregion

//#region Methods
  const handleInputChange = (event) => {
    setMessage(event.target.value)
  };
  const CustomToast = () => {
    Index.toast("Please enter Message", {
      toastId: 'success1',
    });
  };
  const CustomToastSuccessful = () => {
    Index.toast("Notification sent successfully", {
      toastId: 'success1',
    });
  };
  const validation = () => {
    if (message?.length === 0) {
      CustomToast();
    }
    else {
      CustomToastSuccessful();
      updateData();
    }
  }
  const updateData = async () => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("NotificationMessage", message?.trim());
    await Index.DataService.post(Index.Api.Admin.NotificationCreate, urlencoded).then((res) => {
      Index.toast("Notification send successfully", {
        toastId: 'success1',
      });
      setMessage('');
    })
  }
// #endregion

  return (
    <>
      <Index.Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"      >
        <Index.Grid item xs={12}>
          <Index.Typography variant="h5" noWrap component="div">
            Notification
          </Index.Typography>
          <br />
          <Index.TextField
           multiline rows={5}
            maxRows={4}
            className="text-size-input" autoComplete="off" name="message" value={message?.replace(/\s\s+/g, ' ')} size="small" onChange={handleInputChange} label="Message" InputLabelProps={{ shrink: true }} />
          <br />
          <br />
          <Index.Button sx={{ backgroundColor: "#39A6FE" }} variant="contained" onClick={validation} >Send</Index.Button>
        </Index.Grid>
      </Index.Grid>
    </>
  )
}
export default Notifications;