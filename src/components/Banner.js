import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';
import Confetti from 'react-confetti'
import Modal from 'react-bootstrap/Modal'

function Banner(){
    const [open, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false)
      }

    return(
        
        // <Dialog open={open} onClick={handleClose}> 
        <Modal show={open} onHide={handleClose}>
            <Confetti />
            <h2 className="banner">Thank you for participating in The Shoppies!</h2>
        </Modal>
        // </Dialog>
    )
}

export default Banner;