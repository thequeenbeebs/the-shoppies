import React, { useState } from 'react';
import Confetti from 'react-confetti'
import Modal from 'react-bootstrap/Modal'

function Banner(){
    const [open, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false)
      }

    
    return(
        <>
        <Confetti recycle={false}/>
        <Modal show={open} onHide={handleClose}>
            
            <Modal.Body>
                <h2 className="banner">Thank you for participating in The Shoppies!</h2>
            </Modal.Body>
            
        </Modal>
        </>
    )
}

export default Banner;