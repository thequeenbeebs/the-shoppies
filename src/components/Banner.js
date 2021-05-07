import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';
import Confetti from 'react-dom-confetti'

function Banner(){
    const [open, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false)
      }

    return(
        <Dialog open={open} onClick={handleClose}> 
            <h2 className="banner"><Confetti active="true"/>Thank you for participating in The Shoppies!</h2>
        </Dialog>
    )
}

export default Banner;